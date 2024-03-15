import ImageHome from "../components/ImageHome";
import PrayerTime from "../components/PrayerTime";
import TextHome from "../components/TextHome";


export default function Home() {

    return (
        <>
            <div className="container-fluid">
                <div className="row" style={{ margin: '3%' }}>
                    <ImageHome />
                    <div className="col-md-6">
                        <TextHome />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <blockquote className="blockquote">
                            <PrayerTime />
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}