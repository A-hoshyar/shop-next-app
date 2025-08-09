"use client"
import { useParams } from "next/navigation";

export default function Products() {
    const { brand, category } = useParams()

    return (
        <h1>{brand} {category} page</h1>
    );
}
