import React from 'react'

const Bazel = (props) => {
    return (
        <svg {...props} viewBox="0 0 512 512">
            <path fill="#76D275" d="M144 32 l112 112 -112 112 l-112 -112z" />
            <path fill="#43A047" d="M32 144 v112 l112 112 v-112z" />

            <path fill="#76D275" d="M368 32  l112 112 -112 112 -112 -112z" />
            <path fill="#43A047" d="M480 144 v112 l-112 112 v-112z" />

            <path fill="#43A047" d="M256 144 l112 112 -112 112 -112 -112z" />
            <path fill="#00701A" d="M256 368 v112 l-112 -112  v-112z" />
            <path fill="#004300" d="M256 368 l112 -112 v112 l-112 112z" />
        </svg>

    )
}

export default Bazel
