import "./Video.css"

const Video = () =>{
    return(
        <>
        <div className=" max-w-[2020px] m-auto">
         <div class="video-container">
        <div class="video-head">
            <h1>Meet Our Saver of the Month</h1>
            <p>Every month, we shine a spotlight on one saver, asking them about their savings culture and how Piggyvest has helped them.</p>
        </div>
        <div class="video">
            <iframe width="791" height="445" src="https://www.youtube.com/embed/2EnGMGxKuII" title="Piggyvest Saver of the Month - HairsbyDinma" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    </div>
        </>
    )
}

export default Video