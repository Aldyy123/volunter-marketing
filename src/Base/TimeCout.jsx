
const timeOut = () => <p>Waktu sudah habis</p>
const timeIn = ({days, hours, minutes, seconds}) => {
    return (
        <div>
            <p>
                <span>{days}</span>
                <span>{hours}</span>
                <span>{minutes}</span>
                <span>{seconds}</span>
            </p>
            <p>
                <span>Hari</span>
                <span>Jam</span>
                <span>Menit</span>
                <span>Detik</span>
            </p>
        </div>
    )
}
const timeEvents = new Date('Sept 8, 2021 17:17:18').getTime()

export default function TimeCout({ days, hours, minutes, seconds, completed }) {
    if (completed) {
        return timeOut
    }else {
        return timeIn({ days, hours, minutes, seconds})
    }
}

export {timeEvents}