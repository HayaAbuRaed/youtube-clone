import React from 'react'
import {Button} from '@mui/material'
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';
import { UserAuth } from '../Context/AuthProvider';
import {useNavigate} from 'react-router-dom'

const SignIn = () => {
    const {signIn, user} = UserAuth();
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            await signIn();
          } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        if (user != null) {
          navigate('/');
        }
      }, [user]);

    return (
        <>
            <Button variant="outlined" 
            startIcon={<AccountIcon/>}
            sx={{borderRadius: '20px', borderColor: '#E4E4E4'}}
            onClick={() => handleSignIn()}>
                Sign in
            </Button>
        </>
    )
}

export default SignIn