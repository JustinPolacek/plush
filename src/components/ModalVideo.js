import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import StyleVideo from '../components/StyleVideo.scss';

const App = () => {

	const [isOpen, setOpen] = useState(false)

	return (
		<React.Fragment>
			<ModalVideo channel='youtube' autoPlay="autoplay" muted="muted"  videoId="L61p2uyiMSo" isOpen={isOpen}  onClose={() => setOpen(false)} />

			<button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
		</React.Fragment>
	)
}

export default ModalVideo;