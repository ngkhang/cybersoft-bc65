import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

const useFormikCustom = (initialValues, callbackSubmit) => {
  // const [form, setForm] = useState();
  const form = useFormik({
    initialValues,
    onSubmit: (values) => callbackSubmit(values),
  });

  useEffect(() => {
    console.log('mount');
  }, []);

  return form;
}

export default useFormikCustom;
