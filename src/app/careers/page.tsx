import type { Metadata } from "next";
import Link from "next/link";
import { seoConfig, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: seoConfig.careers?.title || "Tuyển dụng | HUSSIO",
  description:
    seoConfig.careers?.description ||
    "Tham gia HUSSIO - nơi phát triển sự nghiệp thời trang. Khám phá các vị trí tuyển dụng hiện tại.",
};

const jobOpenings = [
  {
    position: "Leader Team Ecommerce",
    department: "Ecommerce",
    type: "Full-time",
    location: "TP. Hồ Chí Minh",
    pdfUrl:
      "https://drive.google.com/file/d/1-ZXZjpWR42-kSUD5jzTGLA78wA2atqvS/view",
    requirements: [
      "Có ít nhất 2 năm kinh nghiệm thực chiến trên Shopee và TikTok Shop (ưu tiên ứng viên đã quản lý gian hàng doanh thu >1,5 tỷ/tháng)",
      "Đã từng quản lý đội nhóm >3 người",
      "Khả năng lập kế hoạch và chiến thuật hiệu quả",
      "Hiểu rõ thuật toán hiển thị và các công cụ marketing nội sàn",
      "Có tư duy về Content Marketing và khả năng nhạy bén với các xu hướng (Trends) trên mạng xã hội",
    ],
    responsibilities: [
      "Xây dựng chiến lược kênh: Lập kế hoạch bán hàng chi tiết theo tháng/quý/campaign cho Shopee và TikTok Shop",
      "Quản lý vận hành: Giám sát quy trình đăng sản phẩm, tối ưu hình ảnh/nội dung theo tiêu chuẩn thuật toán của nền tảng",
      "Quản lý chi phí: Trực tiếp đưa ra kế hoạch phân bổ chi phí theo các hạng mục công ty đặt ra. Đảm bảo sử dụng chi phí hiệu quả & không vượt mức cho phép",
      "Phát triển nội dung bán hàng: Điều phối sản xuất nội dung bán hàng (video ngắn, hình ảnh & mô tả sản phẩm, nội dung live stream) trên Tiktok Shop và Shopee nhằm tăng hiệu suất kinh doanh",
      "Quản lý đội ngũ: Phân công công việc, đào tạo và thúc đẩy nhân sự (nhân viên vận hành Tiktok Shop và Shopee, designer, nhân viên vận hành live stream, nhân viên vận hành booking, nhân viên sản xuất nội dung bán hàng) đạt KPI",
      "Phân tích & Báo cáo: Theo dõi số liệu qua các dashboards hàng ngày để báo cáo cho cấp trên & đề xuất các biện pháp xử lý rủi ro kịp thời",
      "Làm việc với BD: Làm việc với đại diện của nền tảng nhằm tận dụng tối đa ưu đãi/quyền lợi cho shop",
    ],
    benefits: [
      "Thu nhập từ 14.000.000 - 18.000.000 VNĐ/tháng (Net) - Lương cơ bản 10 triệu + phụ cấp vị trí 2 triệu + phụ cấp chuyên cần 2 triệu + thưởng KPI",
      "Bao cơm trưa tại công ty",
      "Tham gia các hoạt động nội bộ: Du lịch hằng năm, liên hoan, sự kiện công ty",
      "Phúc lợi đầy đủ: BHXH, nghỉ phép năm, nghỉ lễ Tết theo chế độ công ty",
      "Môi trường làm việc trẻ trung, sáng tạo, nơi bạn được thỏa sức sáng tạo",
    ],
  },
  {
    position: "Senior Marketing Executive",
    department: "Marketing",
    type: "Full-time",
    location: "TP. Hồ Chí Minh",
    pdfUrl:
      "https://docs.google.com/document/d/14oGuvsACsI66zZTm-b-Rf_ylt4I4IBFLZra8bnJLMWg/edit?tab=t.0",
    requirements: [
      "Từ 2 năm kinh nghiệm trong ngành thời trang, phụ kiện cao cấp",
      "Có kinh nghiệm phụ trách thương hiệu từ giai đoạn đầu hoặc từng tái thiết thương hiệu cũ",
      "Chủ động, trách nhiệm cao, tư duy xây dựng thương hiệu dài hạn",
      "Kỹ năng phân tích dữ liệu và báo cáo",
      "Khả năng phối hợp đa nhiệm và quản lý dự án",
    ],
    responsibilities: [
      "Nghiên cứu thị trường, insight người tiêu dùng, đối thủ cạnh tranh trong ngành",
      "Xây dựng định vị thương hiệu, brand key, brand guideline",
      "Trực tiếp phụ trách 01 thương hiệu từ giai đoạn khởi tạo: concept, câu chuyện thương hiệu, danh mục sản phẩm",
      "Lên kế hoạch và triển khai các chiến dịch Brand Marketing: ra mắt sản phẩm mới, tái định vị, truyền thông thương hiệu",
      "Phối hợp Digital Marketing triển khai các kênh: Facebook, TikTok, Website, E-commerce",
      "Phối hợp liên phòng ban: Làm việc chặt chẽ với đội ngũ R&D, Team Sales để đảm bảo chiến dịch Marketing đi sát với mục tiêu",
      "Báo cáo & Phân tích: Báo cáo tuần/tháng/quý cho Ban lãnh đạo, phân tích dữ liệu đề xuất phương án phù hợp",
    ],
    benefits: [
      "Thu nhập từ 12.000.000 - 16.000.000 VNĐ/tháng",
      "Thử việc 2 tháng, nhận 85% lương",
      "Phúc lợi đầy đủ: Máy tính làm việc cá nhân, nghỉ phép năm, nghỉ lễ Tết theo chế độ công ty",
      "Tham gia BHXH đầy đủ theo quy định",
      "Tham gia các hoạt động nội bộ: Du lịch hằng năm, liên hoan, sự kiện công ty",
      "Môi trường làm việc trẻ trung, sáng tạo, nơi bạn được thỏa sức sáng tạo",
    ],
  },
  {
    position: "Design Visual AI",
    department: "Creative",
    type: "Full-time",
    location: "TP. Hồ Chí Minh",
    pdfUrl:
      "https://docs.google.com/document/d/113iURkZ6Y6GYBoEHNIkGlyGytlyiVJB7/edit?usp=drive_link&ouid=111743505999763634593&rtpof=true&sd=true",
    requirements: [
      "Ứng viên nam, độ tuổi từ 20 - 25 tuổi",
      "Có kinh nghiệm ít nhất 1 năm sử dụng thành thạo các phần mềm thiết kế như Photoshop, Illustrator (AI)",
      "Tư duy thẩm mỹ tốt, nắm bắt được xu hướng thiết kế tối giản, sang trọng, kiểm soát và tinh chỉnh kết quả đầu ra của AI phù hợp với đối tượng khách hàng của Hussio",
      "Khả năng sáng tạo và làm việc với công cụ AI (Midjourney, Stable Diffusion, etc.)",
    ],
    responsibilities: [
      "Thiết kế các ấn phẩm truyền thông (bài đăng Facebook, banner, catalogue, hình ảnh sản phẩm,...) với phong cách tối giản, tinh tế và sang trọng, làm nổi bật sản phẩm",
      "Chuyển hoá nội dung yêu cầu hoặc hình ảnh có sẵn để tạo ra sản phẩm mới, Model AI phù hợp và đồng bộ trên các kênh social",
      "Thiết kế các ấn phẩm đi kèm sản phẩm như hộp quà, thẻ bảo hành, tag, bao bì... đảm bảo tính thẩm mỹ và đồng bộ với nhận diện thương hiệu",
      "Phối hợp với team Content/Marketing để xây dựng bộ nhận diện hình ảnh và video cho từng chiến dịch",
      "Nghiên cứu xu hướng thiết kế/AI video mới, đề xuất cải tiến",
      "Quản lý, lưu trữ dữ liệu thiết kế và đảm bảo tiến độ công việc",
    ],
    benefits: [
      "Mức lương: Deal theo năng lực (có thưởng theo hiệu suất)",
      "Bao cơm trưa tại văn phòng",
      "Tham gia BHXH theo quy định",
      "Thưởng theo hiệu suất và lễ/Tết",
      "Môi trường làm việc linh hoạt, hỗ trợ sáng tạo",
      "Được trang bị full bản quyền phần mềm thiết kế và AI tools",
    ],
  },
  {
    position: "Kế toán Nội bộ (TMĐT)",
    department: "Kế toán",
    type: "Full-time",
    location: "TP. Hồ Chí Minh",
    pdfUrl:
      "https://docs.google.com/document/d/1L9lZXlzjwcLp4wUVaY9A_lLT42QhdWvtd4sP4i9BPgU/edit?usp=sharing",
    requirements: [
      "Tốt nghiệp ngành kế toán – tài chính, có tối thiểu 2 năm kinh nghiệm làm kế toán nội bộ trong công ty bán lẻ/thương mại điện tử",
      "Thành thạo Excel và phần mềm kế toán. Biết sử dụng phần mềm quản lý bán hàng (như Sapo, KiotViet,...) là lợi thế lớn",
      "Khả năng kiểm tra – đối chiếu – phân tích số liệu tốt",
      "Có hiểu biết cơ bản về dòng tiền, chi phí vận hành, hàng tồn kho, chu kỳ nhập – bán – thu tiền trong doanh nghiệp nhỏ",
      "Giao tiếp tốt, có khả năng phối hợp với các bộ phận khác (Marketing, Kho,...)",
    ],
    responsibilities: [
      "Quản lý thanh toán & công nợ nội bộ: Đảm bảo chi đúng hạn, đúng quy trình. Lập báo cáo thanh toán hàng tháng, phối hợp các bộ phận kiểm tra tính hợp lệ của đề xuất chi",
      "Kiểm soát doanh thu – chiết khấu – lợi nhuận sàn TMĐT: Theo dõi doanh thu, phí chiết khấu, hoàn tiền, dòng tiền từ Shopee, TikTok. Đối chiếu đơn hàng với xuất kho, tính lợi nhuận thực thu",
      "Kiểm tra - đối chiếu số liệu: Đối chiếu doanh thu thực tế với dữ liệu từ các nền tảng bán hàng. Kiểm tra tồn kho định kỳ và tính giá vốn chính xác theo từng đơn hàng",
    ],
    benefits: [
      "Thu nhập: từ 10.000.000 - 12.000.000 VNĐ/tháng (hoặc deal theo năng lực)",
      "Thử việc 2 tháng, nhận 85% lương",
      "Phúc lợi đầy đủ: Máy tính làm việc cá nhân, nghỉ phép năm, nghỉ lễ Tết theo chế độ công ty",
      "Tham gia BHXH theo quy định",
      "Tham gia các hoạt động nội bộ: Du lịch hằng năm, liên hoan, sự kiện công ty",
      "Môi trường làm việc trẻ trung, năng động",
    ],
  },
];

const generalBenefits = [
  {
    icon: "🎯",
    title: "Môi trường chuyên nghiệp",
    description: "Làm việc với team trẻ, năng động, học hỏi không ngừng",
  },
  {
    icon: "🚀",
    title: "Cơ hội thăng tiến",
    description: "Chính sách thăng tiến rõ ràng, đánh giá hiệu suất hàng quý",
  },
  {
    icon: "👕",
    title: "Đồng phục thương hiệu",
    description: "Được mặc đồ HUSSIO mới nhất mỗi tuần",
  },
  {
    icon: "🎉",
    title: "Hoạt động team building",
    description: "Các chuyến đi, teambuilding, event hàng quý",
  },
  {
    icon: "📚",
    title: "Đào tạo liên tục",
    description: "Khóa học nội bộ, workshop về bán hàng, marketing",
  },
  {
    icon: "🏆",
    title: "Thưởng hiệu quả",
    description: "Thưởng doanh số, thưởng KPI, thưởng lễ Tết",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
            alt="Careers background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] opacity-70 mb-4">
              HUSSIO Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight">
              Cùng HUSSIO
              <br />
              xây dựng tương lai
            </h1>
            <p className="mt-6 text-base md:text-lg text-zinc-300 max-w-xl leading-relaxed">
              Thương hiệu thời trang nam hàng đầu Việt Nam đang tìm kiếm những
              ứng viên tài năng. Hãy trở thành một phần của đội ngũ HUSSIO và
              phát triển sự nghiệp cùng chúng tôi.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#openings"
                className="inline-flex items-center px-6 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-100 transition-colors"
              >
                Xem vị trí tuyển dụng
              </a>
              <a
                href="mailto:recruitment@hussio.vn"
                className="inline-flex items-center px-6 py-3 border border-white text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
              >
                Gửi CV ngay
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              Tại sao nên gia nhập HUSSIO?
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-black tracking-tight uppercase">
              PHÚC LỢI & CƠ HỘI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {generalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-zinc-200 p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-base font-bold uppercase tracking-wider mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              Cơ hội việc làm
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-black tracking-tight uppercase">
              VỊ TRÍ TUYỂN DỤNG HIỆN TẠI
            </h2>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="border border-zinc-200 bg-white overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Job Header */}
                <div className="p-6 md:p-8 border-b border-zinc-100 bg-zinc-50/50">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-black tracking-tight uppercase">
                        {job.position}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mt-1">
                        {job.department} • {job.type} • {job.location}
                      </p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                      <a
                        href={job.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border-2 border-zinc-300 text-zinc-700 text-[9px] font-bold uppercase tracking-[0.2em] hover:border-black hover:text-black transition-colors"
                      >
                        Xem JD chi tiết
                      </a>
                      <a
                        href="mailto:recruitment@hussio.vn"
                        className="inline-flex items-center px-4 py-2 bg-black text-white text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors"
                      >
                        Ứng tuyển ngay
                      </a>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Requirements */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 mb-4">
                      Yêu cầu
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-[10px] text-zinc-400 mt-1">
                            ▸
                          </span>
                          <span className="text-zinc-700 leading-relaxed">
                            {req}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 mb-4">
                      Nhiệm vụ
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-[10px] text-zinc-400 mt-1">
                            ▸
                          </span>
                          <span className="text-zinc-700 leading-relaxed">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 mb-4">
                      Phúc lợi
                    </h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-[10px] text-green-600 mt-1">
                            ✓
                          </span>
                          <span className="text-zinc-700 leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Positions CTA */}
          <div className="mt-16 text-center p-8 bg-zinc-50 border border-zinc-200">
            <h3 className="text-xl font-bold uppercase tracking-tight mb-2">
              Không tìm thấy vị trí phù hợp?
            </h3>
            <p className="text-sm text-zinc-600 mb-6 max-w-lg mx-auto">
              Hãy gửi CV của bạn cho chúng tôi. Chúng tôi sẽ lưu trữ và liên hệ
              khi có vị trí phù hợp.
            </p>
            <a
              href="mailto:recruitment@hussio.vn"
              className="inline-flex items-center px-6 py-3 border-2 border-black text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
            >
              Gửi CV hồ sơ
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-6">
            CÒN CÂU HỎI?
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto mb-8">
            Liên hệ trực tiếp với đội ngũ tuyển dụng HUSSIO để được tư vấn thêm.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
            <a
              href="mailto:recruitment@hussio.vn"
              className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              recruitment@hussio.vn
            </a>
            <span className="hidden md:inline text-zinc-600">|</span>
            <span className="text-zinc-400">
              Hotline tuyển dụng: 087.774.7777 (ext. 102)
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
