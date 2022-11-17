import SignupSuccessGIF from '../../Images/SignupSuccess.gif';
import './SignUpSuccess.css';

function SignUpSuccess() {
    return (
        <div className='signup-success'>
            <h1 className='signup-success-title'>You're part of this adventure now!</h1>
            <img className='signup-success-gif' src={SignupSuccessGIF} alt='Signup Success' />
        </div>
    );
}

export default SignUpSuccess;