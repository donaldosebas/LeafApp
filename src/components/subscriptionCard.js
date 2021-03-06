import React, { useContext} from 'react'
import styles from '../styles/styles.module.css'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom'
import { UserContext } from '../App'

const SubscriptionCard = (props) =>{
    const token = useContext(UserContext)
    const history = useHistory()
    const innerStyles = {                                                                                               
        container:{
            background: props.background
        },
        top:{
            background: props.topBackground
        },
        items:{
            borderBottomWidth: "5px",
            borderBottomColor: props.topBackground
        },
        price:{
            color: props.topBackground
        },
        button:{
            color: 'white',
            background: props.topBackground,
            width: '100px',
            borderRadius: '10px'
        }
    }
    const buyClick = () => {
        if (token.token) {
            history.push({pathname: '/premium', state: props})
        } else {
            alert('You need to login first!')
        }
    }
    return(
        <div className={styles.subscriptionCard} style={innerStyles.container}>
            <div className={styles.subscriptionCardFront} style={innerStyles.top}>
                <h1 className={styles.h1}>{props.name}</h1>
            </div>
            {props.subsInfo && props.subsInfo.map(item =>{
                return(
                    <div className={styles.subsCardItems} style={innerStyles.items}>
                        {props.name === "Free" ? (
                            item === "Unlimited plays" ? 
                            <CloseIcon style={{ fontSize: 50, color: 'grey' }} />
                            :
                            <CheckIcon style={{ fontSize: 50, color: 'grey' }} />
                        ): (
                            <CheckIcon style={{ fontSize: 50, color: 'grey' }} />
                        )}
                        <h3 className={styles.h3}>{item}</h3>
                    </div>
                )
            })}
            <h1 className={styles.price} style={innerStyles.price}>${props.price}</h1>
            <div className={styles.button}>
                <Button style={innerStyles.button} variant="contained" onClick={buyClick}>
                    Buy
                </Button>
            </div>
        </div>
    )
}
export default SubscriptionCard 
