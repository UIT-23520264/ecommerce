'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Bill from './Bill'
import {
    PayPalScriptProvider,
    PayPalButtons,
    FUNDING,
} from '@paypal/react-paypal-js'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type Props = {
    paypalClientId: string,
    subTotal: number,
    shipping: number
}


export default function POST({ paypalClientId, subTotal, shipping }: Props) {

    const emailInput = useRef()
    const firstNameInput = useRef()
    const lastNameInput = useRef()
    const addressInput = useRef()
    const cityInput = useRef()
    const countryInput = useRef()
    const provinceInput = useRef()
    const postalCodeInput = useRef()
    const phoneInput = useRef()
    const router = useRouter()

    const paypalCreateOrder = async () => {

        try {
            let response = await axios.post('/api/paypal/createorder', {
                email: emailInput.current.value,
                firstName: firstNameInput.current.value,
                lastName: lastNameInput.current.value,
                address: addressInput.current.value,
                city: cityInput.current.value,
                country: countryInput.current.value,
                province: provinceInput.current.value,
                postalCode: postalCodeInput.current.value,
                phone: phoneInput.current.value
            })
            return response.data.orderId
        } catch (err) {
            return null
        }
    }

    const paypalCaptureOrder = async (orderId: any) => {
        try {
            let response = await axios.post('/api/paypal/captureorder', {
                orderId
            })
            if (response.data.success) {
                router.refresh()
                router.push('/payment-success')
            }

        } catch (err) {
            return null
        }
    }

    return (
        <>
            <div className="md:w-7/12 lg:pr-10 mb-10">
                <h2 className="text-3xl font-medium text-gray-900" id="slide-over-title">Check out</h2>
                <div className="mt-10">
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Email</label>
                    <div>
                        <input ref={emailInput} className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" type="text" />
                    </div>
                </div>
                <div className="mt-3">
                    <div className="grid gap-4 grid-cols-2">
                        <div>
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Họ</label>
                            <div>
                                <input ref={firstNameInput} className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" type="text" />
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Tên</label>
                            <div>
                                <input ref={lastNameInput} className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Địa chỉ</label>
                    <div>
                        <input ref={addressInput} className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" type="text" />
                    </div>
                </div>
                <div className="mt-3">
                    <div className="grid gap-y-3 gap-x-4 grid-cols-2">
                        {/* <div>
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">City</label>
                            <div>
                                <input ref={cityInput} className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" type="text" />
                            </div>
                        </div> */}
                        <div>
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Thành phố</label>
                            <div>
                                <select ref={countryInput} className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors">
                                    <option value="usa">TPHCM</option>
                                    <option value="canada">Hà Nội</option>
                                </select>
                            </div>
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Số điện thoại</label>
                            <div>
                                <input ref={phoneInput} className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" type="tel" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 md:w-5/12">
                <Bill subTotal={subTotal} shipping={shipping} />
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                    <div className="w-full p-3 items-center justify-center">
                        <PayPalScriptProvider
                            options={{
                                clientId: paypalClientId
                            }}
                        >
                            <PayPalButtons
                                style={{
                                    color: 'blue',
                                    shape: 'rect',
                                    label: 'pay',
                                    height: 50,
                                }}
                                createOrder={async (data, actions) => {
                                    let order_id = await paypalCreateOrder()
                                    return order_id + ''
                                }}
                                onApprove={async (data, actions) => {
                                    let response = await paypalCaptureOrder(data.orderID)
                                    if (response) return true
                                }}
                            />
                        </PayPalScriptProvider>
                        <Image
                            src="/pay.jpg"
                            alt="Straws"
                            width={300}
                            height={200}
                            className="border-8 border-gray-500 items-center justify-center"
                        />
                        <button
                            className="mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 w-full"
                            onClick={() => router.push('/payment-success')}>
                            Hoàn thành thanh toán
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}
function useMutation<T, U, V, W>(arg0: () => any) {
    throw new Error('Function not implemented.')
}

