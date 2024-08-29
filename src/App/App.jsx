// import { useState } from 'react'
import {Formik, Form, Field} from 'formik'
import './App.css'
import axios from 'axios'
import { useState } from 'react';

export default function App() {

  const [image, setImage] = useState(null);

  const handleSearch = async (values, actions) => {

  const response = avait axios.get(`https://api.unsplash.com/photos/?client_id=PvjMb00TBZQMjBYGyHn64d4ju2tX37ge2hlt-_SJJqA&query=${request}`);
    console.log(response);

    setImage(response.data);
  };


  return (
    <div>
      <Formik initialValues={{image_name: ""}} onSubmit={handleSearch}>
        <Form>
          <Field type="text" name="image_name"></Field>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  )
}
