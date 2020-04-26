import React, { Component } from 'react'
import './Impressum.css'
import {connect} from 'react-redux';

class Impressum extends Component {
    render() {
    return (
        <>
        <div className="impressum_div">
            <div className="inner_impressum">
                <h4>{this.props.german ? <>Impressum</> : <>Legal Noctice</>}</h4>
                <h6>{this.props.german ? <>Angaben gemäß § 5 TMG</> : <>According to § 5 TMG</>}</h6> 
                <p>Holger Zerbe</p>
                <p>Rufacher Weg 11</p>
                <p>12349 Berlin</p>
                <h6>{this.props.german ? <>Vertreten durch:</> : <>Represented by</>}</h6>
                <p>Holger Zerbe</p>
                <h6>{this.props.german ? <>Kontakt:</> : <>Contact:</>}</h6>
                <p>{this.props.german ? <>Telefon:</> : <>Phone:</>} +49 30 33957391</p>
                <p>E-Mail: zerbe.holger@gmail.com</p>
                <h6>{this.props.german ? <>Haftungsausschluss:</> : <>Disclaimer:</>}</h6>
                <h6>{this.props.german ? <>Haftung für Inhalte</> : <>Liability for Content</>}</h6>
                <p>{this.props.german ? <>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</> : <>The contents of our pages were created with great care. However, we cannot guarantee that the content is correct, complete and up to date. As a service provider, we are responsible for our own content on these pages in accordance with general laws in accordance with Section 7 (1) TMG. According to §§ 8 to 10 TMG, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time we become aware of a specific legal violation. As soon as we become aware of such violations, we will remove this content immediately.
                </>}</p>
                <h6>{this.props.german ? <>Haftung für Links</>:<>Liability for Links</>}</h6>
                <p>{this.props.german ? <>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</>:<>Our offer contains links to external websites of third parties, the content of which we have no influence on. For this reason, we cannot accept any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time the link was created. No illegal content was discernible at the time the link was created. A permanent control of the content of the linked pages is not reasonable without concrete evidence of an infringement. As soon as we become aware of legal violations, we will remove such links immediately.</>}</p>
                <h6>{this.props.german ?<>Urheberrecht</>:<>Copyright</>}</h6>
                <p>{this.props.german ? <>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</>:<>The content and works on these pages created by the site operator are subject to German copyright law. Duplication, editing, distribution and any kind of use outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use. As far as the content on this page was not created by the operator, the copyrights of third parties are respected. In particular contents of third parties are marked as such. Should you nevertheless become aware of a copyright infringement, please let us know. As soon as we become aware of legal violations, we will remove such content immediately.</>}</p>
                <h6>{this.props.german ? <>Datenschutz</>:<>Data Protection</>}</h6>
                <p>{this.props.german ? <>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</>:<>The use of our website is usually possible without providing personal data. Insofar as personal data (e.g. name, address or email address) is collected on our website, this is always done on a voluntary basis as far as possible. This data will not be passed on to third parties without your express consent.
We would like to point out that data transmission over the Internet (e.g. when communicating by email) can have security gaps. It is not possible to completely protect data from third-party access.
We hereby expressly object to the use of contact data published within the framework of the imprint obligation by third parties for sending unsolicited advertising and information material. The site operators expressly reserve the right to take legal action in the event that unsolicited advertising information is sent, such as spam e-mails.
</>}</p>
<br/>
                <p><a target="_blank" rel="noopener noreferrer" href="https://www.foodata.info">foodata.info</a></p>
                <p>{this.props.german ? <>Website Impressum von </>:<>Website legal notice of </>}<a target="_blank" rel="noopener noreferrer" href="https://www.impressum-generator.de">impressum-generator.de</a></p>
                <p>{this.props.german ? <>Bild (Laptop) von </> : <>Picture (laptop) of </>} <a target="_blank" rel="noopener noreferrer" href="https://pixabay.com/de/users/markusspiske-670330/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=599475">Markus Spiske</a>{this.props.german ? <> auf </> : <> on </>}<a target="_blank" rel="noopener noreferrer" href="https://pixabay.com/de/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=599475">Pixabay</a></p>
            </div>
        </div>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    german: state.german
})
export default connect(mapStateToProps, null)(Impressum);
