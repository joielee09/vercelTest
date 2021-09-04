import { RecoilRoot } from 'recoil';
import '/style/global.css'

const MyApp = ({Component, pageProps}) => {
	return (
		<RecoilRoot>
			<Component {...pageProps}/>
		</RecoilRoot>
	)
}

export default MyApp;
