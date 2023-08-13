import Heading from "@/components/Heading"
import { getFeaturedReview } from "@/lib/reviews"
import Link from "next/link"

export default async function HomePage() {
    const review = await getFeaturedReview();
    return (
        <>
            <Heading>Indie Gamer</Heading>
            <p className="pb-3">only the best indie games review for you</p>
            <div className="bg-white border w-80 rounded shadow hover:shadow-xl sm:w-full">
                <Link href={`/reviews/${review.slug}`} className="flex flex-col sm:flex-row">
                    <img src={review.image} alt="" width="320" height="180" className="mb-2 rounded-t sm:rounded-l sm:rounded-r-none" />
                    <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">{review.title}</h2>
                </Link>
            </div>
        </>

    )
}