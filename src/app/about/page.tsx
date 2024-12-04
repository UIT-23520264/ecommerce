import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="relative h-[600px] md:h-[800px] sticky top-8">
                <Image src="/hehe.jpg" alt="Description" width={500} height={300} />
                </div>
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-6xl font-serif text-gray-800">
                        About Us - <br />
                        BREEZSTRAW
                    </h1>

                    <Section title="Giới thiệu công ty">
                        <p>
                            Công Ty là mô hình kinh doanh các sản phẩm và phân phối sản phẩm về ống hút thân thiện với môi trường được thành lập vào tháng 11 năm 2024.
                        </p>
                        <p>
                            Chúng tôi cam kết các sản phẩm đều được sản xuất từ nguyên liệu thiên nhiên đồng thời với quy trình sản xuất đảm bảo vệ sinh an toàn thực phẩm nhằm sản xuất ra sản phẩm đạt chuẩn quốc gia.
                        </p>
                        <p>
                            Chúng tôi mong rằng sản phẩm sẽ được đón nhận bởi người tiêu dùng và sử dụng lâu dài với đời sống hằng ngày.
                        </p>
                    </Section>

                    <Section title="Ý tưởng kinh doanh">
                        <p>
                            Những người trẻ càng ngày nhận thấy những hậu quả to lớn từ rác thải nhựa, đặc biệt lại đến từ những chiếc ống hút nhựa bé nhỏ mà chúng ta sử dụng hàng ngày. Mỗi năm có hàng triệu tấn nhựa được thải ra môi trường không chỉ ô nhiễm môi trường sông hay ô nhiễm biển mà còn gây nguy hại cho sức khỏe con người.
                        </p>
                        <p>
                            Nhận thức sâu sắc rằng chúng ta không thể tiếp tục sử dụng nhựa như hiện tại, chúng tôi bắt đầu hành trình tìm kiếm những giải pháp thay thế. Tre, gạo và bã cà phê chính là những câu trả lời cho giải pháp thay thế.
                        </p>
                        <p>
                            Với tình yêu thiên nhiên và ước mơ xây dựng một thế giới xanh hơn, ống hút từ tre, gạo, bã cà phê được chúng tôi mang đến.
                        </p>
                        <p>
                            Với mong muốn biến những ý tưởng nhỏ thành hành động lớn, chúng tôi mang đến BREEZSTRAW không chỉ là doanh nghiệp kinh doanh ống hút thân thiện với môi trường mà còn nơi lan tỏa thông điệp bảo vệ môi trường.
                        </p>
                    </Section>

                    <Section title="Sứ mệnh">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Mang đến cho người dùng ống hút sạch và an toàn với con người lẫn môi trường.</li>
                            <li>Hướng đến sự phát triển bền vững của người dùng và thay đổi thói quen người dùng.</li>
                            <li>Giúp ống hút thân thiện với môi trường có thể tiếp cận hơn với người dùng hơn, đặc biệt thông qua thương mại điện tử.</li>
                        </ul>
                    </Section>

                    <Section title="Tầm nhìn">
                        <h3 className="font-semibold mb-2">Ngắn hạn:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Đưa sản phẩm ống hút thân thiện với môi trường tiếp cận nhiều đối tượng khách hàng hơn với mức giá hợp lý.</li>
                            <li>Tạo ra trải nghiệm sử dụng sản phẩm mới lạ, tiện lợi và tốt cho sức khỏe, góp phần thay đổi thói quen tiêu dùng nhựa của người dùng.</li>
                        </ul>
                        <h3 className="font-semibold mb-2">Dài hạn:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Xây dựng một cộng đồng người dùng lớn mạnh, cam kết sử dụng sản phẩm thân thiện với môi trường.</li>
                            <li>Phát triển thương hiệu trở thành một doanh nghiệp tiên phong và đáng tin cậy trong lĩnh vực kinh doanh các sản phẩm bền vững, không chỉ trong nước mà còn trên thị trường quốc tế.</li>
                        </ul>
                    </Section>

                    {/* <div className="pt-6">
                        <p className="text-gray-700">
                            Để biết thêm thông tin về sản phẩm và phân phối, vui lòng liên hệ qua email{' '}
                            <Link href="mailto:info@breezstraw.com" className="text-emerald-600 hover:underline">
                                info@breezstraw.com
                            </Link>
                            {' '}hoặc{' '}
                            <Link href="#" className="text-emerald-600 hover:underline">
                                liên hệ
                            </Link>
                            {' '}với chúng tôi qua số{' '}
                            <Link href="tel:+84961251437" className="text-emerald-600 hover:underline">
                                +84 961 251 437
                            </Link>.
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
        </section>
    )
}