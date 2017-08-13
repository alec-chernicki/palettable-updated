import { connect } from 'react-redux';
import Footer from '../components/Footer/Footer';

const mapDispatchToProps = dispatch => ({
  onStartTutorial() {},
});

const FooterContainer = connect(null, mapDispatchToProps)(Footer);

export default FooterContainer;
