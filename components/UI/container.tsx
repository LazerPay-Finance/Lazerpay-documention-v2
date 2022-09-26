import classNames from "classnames";
import React from "react";

interface IProps {
    children: React.ReactNode,
    fluid?: Boolean
}

const LzContainer = ({ children, fluid = false }: IProps) => (
    <div className={
        classNames(
            "max-w-full w-full mx-auto px-5 xl:px-20 md:px-6 md:max-w-screen-lg lg:max-w-screen-2xl 2xl:max-w-screen-3xl",
            { '!w-full !px-0': fluid })}>
        {children}
    </div>
)

export default LzContainer;
