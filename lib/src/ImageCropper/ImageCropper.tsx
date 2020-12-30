import React from "react";
import classnames from "classnames";
import { Modal } from "../Modal";
import { ResizeHandle } from "./ResizeHandle";
import { moveHandler, readImage, resizeHandler, Position, addListener, crop } from "./utils";
import { ImagePlaceholderIcon } from "./ImagePlaceholderIcon";
import "./image-cropper.scss";

export type ImageCropperProps = Omit<JSX.IntrinsicElements["div"], "onChange"> & {
    /** The image value as string */
    value?: string;
    /** On change handler fired when image has been cropped or reset */
    onChange?: (image: string) => void;
    /** The size of the image cropper picker */
    size?: number;
};

export interface ClipRect {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

export const ImageCropper: React.FC<ImageCropperProps> = React.memo(({ onChange, value, size = 200, ...props }: ImageCropperProps) => {
    const fileRef: React.MutableRefObject<HTMLInputElement> = React.useRef<HTMLInputElement>();
    const imgRef: React.MutableRefObject<HTMLImageElement> = React.useRef<HTMLImageElement>();
    const [modalToggle, setModalToggle] = React.useState<boolean>(false);
    const [imgSrc, setImgSrc] = React.useState<string>();
    const [croppedImgSrc, setCroppedImgSrc] = React.useState<string>(value);
    const [pos, setPos] = React.useState<ClipRect>({ top: 0, left: 0, bottom: 180, right: 180 });

    /** Handles selecting a file */
    const handleInput = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {
        readImage(event)
            .then((val: string) => {
                setImgSrc(val);
                setModalToggle(true);
            })
            .catch(console.error);
    }, []);

    /** Handles dragging the cropbox */
    const handleMove = React.useCallback((event: React.MouseEvent | React.TouchEvent) => {
        addListener(event, (ev) => {
            moveHandler(ev, imgRef.current, setPos);
        });
    }, []);

    /** Handles resizing the cropbox */
    const handleResize = React.useCallback((event: React.MouseEvent | React.TouchEvent) => {
        const position: Position = (event.target as HTMLElement).className.replace("handle", "").trim() as Position;

        addListener(event, (e: MouseEvent | TouchEvent) => {
            resizeHandler(e, position, imgRef.current, setPos);
        });
    }, []);

    /** Handles cropping the image to the cropbox */
    const handleCrop = () => {
        crop(imgSrc, pos.left, pos.top, pos.right - pos.left, pos.bottom - pos.top, imgRef.current).then((img: string) => {
            setModalToggle(false);
            onChange && onChange(img);
        });
    };

    /** Resets the image cropper */
    const reset = React.useCallback(() => {
        setCroppedImgSrc(null);
        setImgSrc(null);
        fileRef.current.value = fileRef.current.files = null;
        props.onReset && props.onReset(null);
    }, [props.onReset]);

    React.useEffect(() => setCroppedImgSrc(value), [value]);

    React.useEffect(() => {
        modalToggle && setPos({ top: 0, left: 0, bottom: 180, right: 180 });
    }, [modalToggle]);

    return (
        <div {...props} className={classnames("rc", "image-cropper", props.className)}>
            <input type="file" accept="image/*" ref={fileRef} onInput={handleInput} hidden />

            <div className="image-preview" style={{ width: size, height: size }}>
                <div className="preview">
                    {croppedImgSrc ? <img src={croppedImgSrc} width="100%" /> : <ImagePlaceholderIcon />}
                    <button
                        type="button"
                        className="select"
                        onClick={() => {
                            fileRef.current.value = fileRef.current.files = null;
                            fileRef.current?.click();
                        }}
                    >
                        {props.children || "Select Image"}
                    </button>
                    {croppedImgSrc && (
                        <button type="button" className="reset" onClick={reset}>
                            &#x2715;
                        </button>
                    )}
                </div>
            </div>

            <Modal
                toggle={modalToggle}
                size="modal-lg"
                onDismiss={() => setModalToggle(false)}
                className="image-cropper-modal"
                disableBackdropDismiss
                escapeToDismiss={false}
                body={
                    <div className="cropping-area">
                        <img src={imgSrc} draggable={false} ref={imgRef} />
                        <img
                            className="crop-box"
                            src={imgSrc}
                            style={{ clip: `rect(${pos.top}px, ${pos.right}px, ${pos.bottom}px, ${pos.left}px)` }}
                            draggable={false}
                            onMouseDown={handleMove}
                            onTouchStart={handleMove}
                        />
                        <ResizeHandle position="top-left" coordinates={pos} handleResize={handleResize} />
                        <ResizeHandle position="top-right" coordinates={pos} handleResize={handleResize} />
                        <ResizeHandle position="bottom-left" coordinates={pos} handleResize={handleResize} />
                        <ResizeHandle position="bottom-right" coordinates={pos} handleResize={handleResize} />
                    </div>
                }
                footer={
                    <div>
                        <button className="btn btn-outline-primary" onClick={() => setModalToggle(false)} type="button">
                            Cancel
                        </button>
                        <button className="btn btn-primary ml-3" onClick={handleCrop} type="button">
                            Crop
                        </button>
                    </div>
                }
            />
        </div>
    );
});
