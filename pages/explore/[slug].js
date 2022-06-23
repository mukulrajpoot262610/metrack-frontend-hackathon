import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getCourseDetail } from '../../services/api'
import CourseDetail from '../../components/Course/CourseDetail'
import toast, { LoaderIcon } from 'react-hot-toast'

const CourseDetailPage = () => {

    const router = useRouter()
    const id = router.query.slug
    const [response, setResponse] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getCourseDetail(id)
                setResponse(data.data)
            } catch (err) {
                console.log(err)
                toast.error(err.response.data.msg)
            }
        }
        fetchData()
    }, [id])

    return (
        <>
            {
                response.length === 0 ? <div className='h-96 flex justify-center items-center'> <LoaderIcon /></div> : <CourseDetail course={response} />
            }
        </>

    )
}

export default CourseDetailPage