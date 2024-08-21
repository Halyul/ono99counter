import React, {
  useEffect
} from 'react'
import {
  useNavigate,
  useRouteError
} from "react-router-dom";
import errorClasses from './Error.module.scss'

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <section className={errorClasses.app}>
      <button onClick={() => navigate(-1, { replace: true })}>
        Back
      </button>
    </section>
  )
}
