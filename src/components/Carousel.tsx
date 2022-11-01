import React from "react";

type CarouselProps = {
    content: React.ReactNode,
    title?: string
}

const Carousel = ({content, title}: CarouselProps) => {
    return (
        <section className="flex flex-col pb-8">
            <h4 className="font-bold text-xl pt-8 pl-8">{title}</h4>
            <div className="overflow-x-auto ml-8 mr-8 mt-8">
                <div className="flex snap-mandatory snap-x gap-4">
                    {content}
                </div>
            </div>
        </section>

    )
}

export default Carousel;