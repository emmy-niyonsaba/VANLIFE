import React from "react"
// import { BsStarFill } from "react-icons/bs"
import { star,reviews } from "../../../public/images/index"

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]

    return (
        <section className=" flex flex-col gap-10 mt-5">
            <div className=" flex items-center  gap-6">
                <h2 className=" text-2xl font-bold">Your reviews</h2>
                <p>
                    Last <span className=" underline font-bold" >30 days</span>
                </p>
            </div>
            <div>
                <div className=" flex items-center gap-2">
                    <h1>5.0</h1>
                    <img src={star} alt="star" />
                    <p>Overall rating</p>
                </div>
                <img src={reviews} alt="reviews" />
            </div>

            <h3>Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id} className=" flex flex-col gap-10">
                    <div className=" flex flex-col gap-4">
                            <div className=" flex items-center gap-2"> 
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                                <img src={star} alt="star" />
                            </div>
                        <div className="info">
                            <p className="name">{review.name}</p>
                            <p className="date">{review.date}</p>
                        </div>
                        <p>{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}
        </section>
    )
}
