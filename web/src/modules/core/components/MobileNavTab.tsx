import React from 'react'

interface MobileNavTabProps {
    Svg: React.FC<React.SVGProps<SVGSVGElement>>
    name: string
    isActive: boolean
    path: string
}

const MobileNavTab: React.FC<MobileNavTabProps> = ({ Svg, name, isActive, path }) => {
    return (
        <div className={`${isActive ? 'text-brand-primary' : 'text-gray-500'} flex flex-col items-center`}>
            <Svg className="size-8" />
            <p className="font-roboto text-xs">{name}</p>
        </div>
    );
}

export default MobileNavTab
