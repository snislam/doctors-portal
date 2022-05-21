import React from 'react';
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Common/Loading/Loading';

const AddDoctor = () => {
    const imgbbKey = 'a9cd142096cbf5ffed00c69b87100707';
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { data: servicesName, isLoading } = useQuery('users', () => fetch('https://lit-retreat-57024.herokuapp.com/servicesname', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    const onSubmit = async (data) => {
        const image = data.image[0];
        // console.log(data)
        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        image: result.data.url
                    }
                    // add doctor to mongo
                    fetch('https://lit-retreat-57024.herokuapp.com/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Successfuly added.')
                                reset();
                            } else {
                                toast.error("Dosen't added")
                            }
                        })
                } else {
                    console.log(result.error.message)
                }
            })
    }
    return (
        <div className='w-1/2 mx-auto bg-accent p-5 rounded-md mt-5'>
            <h1 className='text-2xl uppercase font-bold text-center text-primary'>Add a Doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full mt-5'>

                <input
                    type="text"
                    className='w-full py-2 px-3 my-1 rounded-md'
                    placeholder='Name'
                    {...register("name", {
                        required: {
                            value: true,
                            message: "This field is required"
                        }
                    })} />
                <label className="label">
                    <span className="label-text-alt">
                        {errors.name?.type === 'required' && <p className='text-white'>{errors.name?.message}</p>}
                    </span>
                </label>


                <input
                    type="email"
                    className='w-full py-2 px-3 my-1 rounded-md'
                    placeholder='email'
                    {...register("email", {
                        required: {
                            value: true,
                            message: "This field is required"
                        },
                        pattern: {
                            value: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
                            message: "Please enter a valid email address"
                        }
                    })} />
                <label className="label">
                    <span className="label-text-alt">
                        {errors.email?.type === 'required' && <p className='text-white'>{errors.email?.message}</p>}
                        {errors.email?.type === 'pattern' && <p className='text-white'>{errors.email?.message}</p>}
                    </span>
                </label>


                <select
                    type="select"
                    className='w-full py-2 px-3 my-1 rounded-md'
                    {...register("speciality", {
                        required: {
                            value: true,
                            message: "This field is required"
                        }
                    })} >
                    {
                        servicesName.map(s => <option key={s._id}>{s.name}</option>)
                    }
                </select>
                <label className="label">
                    <span className="label-text-alt">
                        {errors.speciality?.type === 'required' && <p className='text-white'>{errors.speciality?.message}</p>}
                    </span>
                </label>

                <input
                    type="file"
                    className='w-full bg-white p-2 my-1 rounded-md'
                    {...register("image", {
                        required: {
                            value: true,
                            message: "This field is required"
                        }
                    })} />
                <label className="label">
                    <span className="label-text-alt">
                        {errors.image?.type === 'required' && <p className='text-white'>{errors.image?.message}</p>}
                    </span>
                </label>

                <input className='btn btn-primary w-full my-2' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;