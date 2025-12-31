import Header from '../../components/Header/Header';
import newsletterPdf from '../../assets/newsletter.pdf';
import { PageWrapper, Content, Title, PdfFrame, DownloadLink } from './newsletter.styles';

const Newsletter = () => {
	return (
		<PageWrapper>
			<Header />
			<Content>
				<Title>Newsletter</Title>
				<PdfFrame
					src={`${newsletterPdf}#toolbar=0&navpanes=0`}
					title="Let's Help The Next Newsletter"
				/>
				<DownloadLink
					href={newsletterPdf}
					target="_blank"
					rel="noopener noreferrer"
				>
					Open the newsletter in a new tab
				</DownloadLink>
			</Content>
		</PageWrapper>
	);
};

export default Newsletter;
