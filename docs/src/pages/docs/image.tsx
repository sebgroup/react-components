import React from "react";
import { withPrefix } from "gatsby";
import Docs from "@common/Docs";
import { Img, ImgProps } from "@sebgroup/react-components/Image/Img";
import { DynamicFormOption, useDynamicForm } from "@sebgroup/react-components/hooks/useDynamicForm";
import { Button } from "@sebgroup/react-components/Button";

const importString: string = require("!raw-loader!@sebgroup/react-components/Image/Img");
const code: string = `<Img src={imageSrc} />`;

const imgTypes: Array<DynamicFormOption<ImgProps["type"]>> = [
    { key: "img", value: "img", label: "img", additionalProps: { wrapperProps: { className: "d-inline-block" } } },
    { key: "div", value: "div", label: "div", additionalProps: { wrapperProps: { className: "d-inline-block" } } },
];

const ImagePage: React.FC = (): React.ReactElement<void> => {
    const [renderControls, { controls }] = useDynamicForm([
        {
            key: "controls",
            items: [
                {
                    key: "imgType",
                    label: "Image type",
                    description: "The image can be rendered as a native img tag or div tag. Each has pros and cons.",
                    controlType: "Radio",
                    options: imgTypes,
                    value: imgTypes[0].value,
                },
                {
                    key: "bgFixed",
                    label: "bgFixed",
                    rulerKey: "imgType",
                    formElementAdditionalProps: { className: "indent pl-3 pt-2" },
                    condition: imgTypes[1].value,
                    description: "Fixing the background allows it to have parallax effect when scrolling. Only available for div image type.",
                    controlType: "Checkbox",
                },
                {
                    key: "showChildren",
                    label: "Render children inside div image",
                    rulerKey: "imgType",
                    formElementAdditionalProps: { className: "indent pl-3 pt-2" },
                    condition: imgTypes[1].value,
                    description: "One advantage of a div image is that you can render children inside the image",
                    controlType: "Checkbox",
                },
                { key: "rounded", label: "rounded", controlType: "Checkbox" },
                { key: "thumbnail", label: "thumbnail", description: "Thumbnail images are also responsive", controlType: "Checkbox" },
                { key: "responsive", label: "responsive", description: "Makes sure that the image scales with it's container", value: true, controlType: "Checkbox" },
            ],
        },
    ]);

    return (
        <Docs
            mainFile={importString}
            example={
                <div className="w-100 h-100">
                    <Img
                        src={withPrefix("/images/rabbit-on-the-spot.jpg")}
                        type={controls.imgType}
                        width={controls.width}
                        height={controls.height}
                        rounded={controls.rounded}
                        thumbnail={controls.thumbnail}
                        responsive={controls.responsive}
                        bgFixed={controls.bgFixed}
                    >
                        {controls.showChildren && (
                            <div className="p-3">
                                <h4>Labore rerum id quis rerum voluptatibus et nesciunt.</h4>
                                <p>
                                    A sapiente et et sequi. Unde deleniti recusandae at eligendi id reiciendis tempore et. Ut ab sunt tempora aut fuga asperiores provident. Delectus earum earum quae
                                    voluptates impedit veritatis quos ut in. Omnis unde beatae. Quo eos ducimus necessitatibus laborum.
                                </p>
                                <h4>Quisquam vel nesciunt consequatur quia ratione aut qui adipisci qui.</h4>
                                <p>
                                    Tenetur reprehenderit architecto. Consequuntur blanditiis consequatur non quod laborum magni. Aut distinctio ducimus laudantium asperiores. Aut repudiandae
                                    similique tempora commodi dolor.
                                </p>
                                <Button>A button</Button>
                            </div>
                        )}
                    </Img>
                    {controls.bgFixed && (
                        <>
                            <br />
                            <h3>Scroll to see the effect</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dignissimos eligendi et, similique enim dicta expedita aspernatur doloribus pariatur dolorem
                                reiciendis cupiditate temporibus iste suscipit nobis adipisci laudantium, hic ad?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati inventore nulla magnam, veritatis temporibus tenetur quidem dolores nobis, rerum alias reiciendis
                                illo facere assumenda distinctio reprehenderit nostrum vitae natus.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati inventore nulla magnam, veritatis temporibus tenetur quidem dolores nobis, rerum alias reiciendis
                                illo facere assumenda distinctio reprehenderit nostrum vitae natus.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In obcaecati inventore nulla magnam, veritatis temporibus tenetur quidem dolores nobis, rerum alias reiciendis
                                illo facere assumenda distinctio reprehenderit nostrum vitae natus.
                            </p>
                        </>
                    )}
                </div>
            }
            code={code}
            controls={renderControls()}
        />
    );
};

export default ImagePage;
