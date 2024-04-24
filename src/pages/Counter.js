import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/counter/counterSlice'
// import styles from './Counter.module.css'
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import DropdownLanguage from "@/components/dropLanguage"
import { useTranslation } from "react-i18next";
import Header from '../components/layouts/header';
import Footer from '../components/layouts/footer';

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Header></Header>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement());
            toast("Wow so easy!", {
              // theme: "dark",
            })
          }}
        >
          Decrement
        </Button>
      </div>
      <DropdownLanguage></DropdownLanguage>
      <p>{t("login")}</p>
      <Footer></Footer>
    </div>
  )
}

export default Counter