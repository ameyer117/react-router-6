import * as React from "react"
import type { SVGProps } from "react"
const Spinner = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
        <style>
            {
                "@keyframes spinner_MGfb{93.75%,to{opacity:.2}}.spinner_S1WN{animation:spinner_MGfb .8s linear infinite;animation-delay:-.8s}"
            }
        </style>
        <circle cx={8} cy={24} r={6} className="spinner_S1WN" />
        <circle
            cx={24}
            cy={24}
            r={6}
            className="spinner_S1WN"
            style={{
                animationDelay: "-.65s",
            }}
        />
        <circle
            cx={40}
            cy={24}
            r={6}
            className="spinner_S1WN"
            style={{
                animationDelay: "-.5s",
            }}
        />
    </svg>
)

export default Spinner
