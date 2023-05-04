import React from 'react'
import './Home.css'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../../store/counterSlice'
import useAuth from '../../hooks/useAuth'

export default function Home() {
    const { signOut } = useAuth()
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className='home'>
            <div>
                {
                    count >= 0
                        ? <Text element="h2" className="title" color="dark-title" value={count} />
                        : <Text element="h2" className="title" color="dark-title" value={0} />
                }

            </div>
            <Button style="dark" width="100%" handleClick={() => dispatch(increment())}>Incrementar</Button>
            <Button style="light" width="100%" handleClick={() => dispatch(decrement())}>Decrementar</Button>
            <Button style="light" width="100%" handleClick={() => dispatch(incrementByAmount(10))}>Increment 10</Button>
            <Button style="light" width="100%" handleClick={() => dispatch(incrementByAmount(-10))}>decrement -10</Button>
            <Button style="light" width="100%" handleClick={() => { signOut() }}>Signout</Button>

        </div>
    )
}
