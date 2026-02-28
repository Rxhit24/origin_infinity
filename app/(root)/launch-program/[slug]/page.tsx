'use client';
import { useParams } from "next/navigation"

const ProgramInfo = () => {
    const {slug} = useParams();
    return (
        <div>
            {slug}
        </div>
    )
} 

export default ProgramInfo