import React from "react";
import ReactDOM from "react-dom";
import {
  requestAnimationTimeout,
  cancelAnimationTimeout
} from "react-virtualized/dist/commonjs/utils/requestAnimationTimeout";

import Head from "components/data/document_head";
import HomeMasterbar from "home/masterbar";
import Register from "home/register";
import Footer from "layout/footer";

import "./style.scss";

const HEADER_HEIGHT = 90;

export default class Privacy extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMobileNavOpen: false,
      scrolling: false,
      registerMode: "register",
      registerFormOpen: false,
      playing: false
    };
  }

  handleMobileNavOpenChange = isOpen => {
    this.setState({ isMobileNavOpen: isOpen });
  };

  handleRegisterModeChange = nextMode => {
    this.setState({ registerMode: nextMode });
  };

  handleRegisterFormToggle = mode => {
    this.setState({ registerMode: mode, registerFormOpen: true });
  };

  handleRegisterClose = () => {
    this.setState({ registerFormOpen: false });
  };

  render() {
    return (
      <main className="grid-990">
        <Head title="Nền tảng đo lường Website & Landing page" />
        <HomeMasterbar
          theme="white"
          onMobileNavOpenChange={this.handleMobileNavOpenChange}
          onRegisterFormToggle={this.handleRegisterFormToggle}
          showBorder={true}
        />
        <Register
          open={this.state.registerFormOpen}
          onClose={this.handleRegisterClose}
          scrollTop={1000}
          isScrolling={this.state.scrolling}
          registerMode={this.state.registerMode}
          onRegisterModeChange={this.handleRegisterModeChange}
        />
        <div className="u01-header__space-saver" />
        <div className="pricing__pricing-container">
          <div className="twelve-column">
            <section className="pricing-container">
              <div className="pricing">
                <h1 className="c42-page-header-level-2-plank__headline c42-page-header-level-2-plank__headline--two lf-font-inter">
                  {"Chính sách dữ liệu heatmap"}
                </h1>
                <em>{"Sửa đổi lần cuối: 27 tháng 11 năm 2019"}</em>
                <hr />
                <div className="page">
                  <h2>
                    Chúng tôi KHÔNG BAO GIỜ bán dữ liệu cá nhân của bạn cho bất
                    cứ ai.
                  </h2>
                  <p>
                    <strong>
                      heatmap cho phép khách truy cập trang web của mình,
                      www.heatmap.com, kiểm soát dữ liệu cá nhân của họ. Chúng
                      tôi cũng cung cấp các điều khiển cho phép người dùng /
                      khách hàng của heatmap có quyền kiểm soát quyền riêng tư
                      của dữ liệu cá nhân được dịch vụ của chúng tôi nắm bắt.
                      Chính sách bảo mật này cung cấp thông tin về cách heatmap
                      xử lý và bảo vệ dữ liệu này.
                    </strong>
                  </p>
                  <p>
                    heatmap coi bảo vệ dữ liệu và quyền riêng tư là điều tối
                    quan trọng. Chúng tôi không bao giờ bán dữ liệu cá nhân và
                    chúng tôi thực hiện tất cả các hoạt động xử lý tuân thủ
                    nghiêm ngặt Quy định bảo vệ dữ liệu chung của EU (
                    <strong>GDPR</strong>) (cụ thể nhưng không giới hạn ở Điều 6
                    (1) (b) cho (f) và Điều 28) như cũng như Luật pháp của Việt
                    Nam (cùng với Luật áp dụng trực tiếp), nơi heatmap được hợp
                    nhất.
                  </p>
                  <p>
                    Nếu bạn là khách truy cập của một trang web đang chạy các
                    dịch vụ được cung cấp bởi heatmap (“
                    <strong>heatmap Enabled Site</strong>”), phần Người dùng
                    cuối (<strong>End users</strong>) của Chính sách bảo mật này
                    áp dụng cho bạn.
                  </p>
                  <p>
                    Đối với mục đích của Chính sách bảo mật này, dữ liệu cá nhân
                    có nghĩa là bất kỳ thông tin nào liên quan đến một cá nhân
                    được xác định hoặc nhận dạng; một cá nhân có thể nhận dạng
                    là một người có thể được xác định, trực tiếp hoặc gián tiếp,
                    đặc biệt bằng cách tham chiếu đến một mã định danh như tên,
                    số chứng minh thư , dữ liệu vị trí, số nhận dạng trực tuyến
                    hoặc một hoặc nhiều yếu tố cụ thể đối với vật lý, sinh lý,
                    bản sắc di truyền, tinh thần, kinh tế, văn hóa hoặc xã hội
                    của người tự nhiên đó (
                    <strong>Dữ liệu cá nhân trực tuyến</strong>).
                  </p>
                  <p></p>
                  <h2>Trách nhiệm xử lý dữ liệu cá nhân</h2>
                  heatmap chịu trách nhiệm xử lý hợp pháp dữ liệu của bạn như
                  được thực hiện trên trang web của chúng tôi.
                  <p></p>
                  <p></p>
                  <h2>
                    Loại dữ liệu cá nhân nào được xử lý và cho mục đích gì?
                  </h2>
                  <i>Dữ liệu sử dụng</i>
                  Khi bạn truy cập trang web của chúng tôi, chúng tôi lưu trữ
                  tên của nhà cung cấp dịch vụ internet của bạn, trang web mà
                  bạn đã truy cập chúng tôi từ đó, các phần của trang web chúng
                  tôi truy cập, ngày và thời gian truy cập của bạn và thông tin
                  từ thiết bị (loại thiết bị, hoạt động hệ thống, độ phân giải
                  màn hình, ngôn ngữ, quốc gia bạn đang ở và loại trình duyệt
                  web) bạn đã sử dụng trong chuyến thăm của mình. Chúng tôi chỉ
                  chụp và lưu trữ một phiên bản rút gọn của địa chỉ IP của bạn.
                  Nó được chụp và lưu trữ ở định dạng ẩn danh bằng cách chặn
                  octet cuối cùng để địa chỉ IP đầy đủ của bạn không bao giờ đến
                  máy chủ của chúng tôi và chúng tôi không bao giờ có quyền truy
                  cập vào nó.
                  <p></p>
                  <p>
                    Chúng tôi xử lý dữ liệu sử dụng này để tạo điều kiện cho bạn
                    truy cập vào các dịch vụ của chúng tôi (ví dụ: để điều chỉnh
                    dịch vụ của chúng tôi với thiết bị bạn đang sử dụng) và để
                    nhận ra và ngăn chặn mọi hành vi lạm dụng. Chúng tôi cũng xử
                    lý dữ liệu sử dụng ở dạng ẩn danh cho mục đích thống kê và
                    để cải thiện trang web của chúng tôi.
                  </p>
                  <p>
                    <i>Cookies</i>
                    heatmap sử dụng cookie để xử lý thông tin bao gồm thông tin
                    nhật ký internet tiêu chuẩn và chi tiết về các mẫu hành vi
                    của khách truy cập khi truy cập trang web của chúng tôi.
                    Điều này được thực hiện để cung cấp cho bạn trải nghiệm tốt
                    hơn và để tạo thuận lợi cho việc sử dụng các chức năng nhất
                    định. Cookie là các tệp dữ liệu nhỏ được chuyển đến máy tính
                    hoặc thiết bị bởi các trang web cho mục đích lưu giữ hồ sơ
                    và để tăng cường chức năng trên trang web của chúng tôi.
                    heatmap lưu trữ thông tin này trong một hồ sơ người dùng
                    giả danh. heatmap không xử lý thông tin này để xác định
                    người dùng cá nhân hoặc để khớp thông tin đó với dữ liệu
                    khác về người dùng cá nhân.
                  </p>
                  <p>
                    Cookies được lưu trữ trên thiết bị cá nhân của bạn và bạn có
                    toàn quyền kiểm soát việc sử dụng chúng. Bạn có thể tắt hoặc
                    hạn chế truyền cookie bằng cách thay đổi cài đặt trình duyệt
                    web của bạn. Cookies đã được lưu trữ có thể bị xóa bất cứ
                    lúc nào. Nếu bạn truy cập trang web heatmap, với cookie bị
                    vô hiệu hóa, bạn có thể không thể sử dụng tất cả các chức
                    năng trên trang web của chúng tôi trong phạm vi đầy đủ.
                  </p>
                  <p>
                    Để biết thêm thông tin về các cookie chúng tôi sử dụng, vui
                    lòng truy cập Thông tin cookie.
                  </p>
                  <p>
                    <i>Liên lạc với chúng tôi qua email</i>
                    Trên trang web của chúng tôi, bạn có cơ hội liên hệ với
                    chúng tôi để đặt câu hỏi cho chúng tôi, ví dụ như qua biểu
                    mẫu liên hệ, chúng tôi hỏi bạn về thông tin liên hệ của bạn
                    (ví dụ: tên, địa chỉ email, v.v.). Chúng tôi chỉ sử dụng dữ
                    liệu này liên quan đến việc trả lời các truy vấn mà chúng
                    tôi nhận được.
                  </p>
                  <p>
                    Nếu bạn nhận được email từ chúng tôi, chúng tôi có thể sử
                    dụng một số công cụ phân tích nhất định để thu thập dữ liệu
                    như khi bạn mở email của chúng tôi hoặc nhấp vào bất kỳ liên
                    kết hoặc biểu ngữ nào mà email của chúng tôi chứa. Dữ liệu
                    này giúp chúng tôi đánh giá hiệu quả của các chiến dịch
                    truyền thông và tiếp thị.
                  </p>
                  <p>
                    <i>Tài khoản heatmap</i>
                    Khi bạn đăng ký và mở tài khoản bằng heatmap hoặc đăng ký
                    nội dung hoặc ưu đãi, chúng tôi có thể yêu cầu bạn cung cấp
                    cho chúng tôi thông tin như tên, địa chỉ email và thông tin
                    chi tiết về tổ chức của bạn. Như chi tiết khác trong Chính
                    sách bảo mật này, chúng tôi sẽ chỉ xử lý thông tin này để
                    cung cấp cho bạn dịch vụ mà bạn đã đăng ký. Vui lòng tham
                    khảo Điều khoản dịch vụ của chúng tôi để biết thêm chi tiết
                    về việc đăng ký và sử dụng các dịch vụ do heatmap cung cấp.
                  </p>
                  <p>
                    Bạn có thể hủy kích hoạt tài khoản heatmap của mình và /
                    hoặc hủy đăng ký nhận nội dung hoặc ưu đãi từ chúng tôi bất
                    cứ lúc nào. Sau khi chấm dứt tài khoản của bạn, chúng tôi có
                    thể giữ lại dữ liệu cá nhân của bạn (một phần hoặc toàn bộ)
                    để đáp ứng mọi yêu cầu về quy định và báo cáo cho các khung
                    thời gian theo quy định của pháp luật và để có thể giải
                    quyết các vấn đề về dịch vụ khách hàng. Bất kỳ dữ liệu cá
                    nhân nào khác mà chúng tôi đã xử lý thay mặt bạn sẽ bị xóa
                    vĩnh viễn trong vòng 30 ngày theo lịch.
                  </p>
                  <p></p>
                  <h2>Truy cập và tiết lộ cho bên thứ ba </h2>
                  Chúng tôi sử dụng một số nhà cung cấp dịch vụ bên ngoài đáng
                  tin cậy cho các dịch vụ phân tích, xử lý và / hoặc lưu trữ dữ
                  liệu kỹ thuật nhất định. Các nhà cung cấp dịch vụ này được lựa
                  chọn cẩn thận và đáp ứng các tiêu chuẩn bảo mật và bảo mật dữ
                  liệu cao. Chúng tôi chỉ chia sẻ thông tin với họ cần thiết cho
                  các dịch vụ được cung cấp và chúng tôi hợp đồng ràng buộc họ
                  để giữ bí mật mọi thông tin chúng tôi chia sẻ với họ và chỉ xử
                  lý Dữ liệu Cá nhân theo hướng dẫn của chúng tôi.
                  <p></p>
                  <p>
                    Chúng tôi sẽ chỉ chuyển dữ liệu của bạn cho bên thứ ba mà
                    không có sự đồng ý rõ ràng của bạn nếu chúng tôi bắt buộc
                    phải làm như vậy theo luật định hoặc hướng dẫn của cơ quan
                    công quyền hoặc tòa án như được nêu trong Điều khoản dịch vụ
                    của chúng tôi.
                  </p>
                  <p></p>
                  <h2>Chúng tôi liên hệ với bạn </h2>
                  Thỉnh thoảng chúng tôi có thể gửi cho bạn email thông báo về
                  các cập nhật cho sản phẩm, tài liệu pháp lý của chúng tôi,
                  cung cấp hỗ trợ khách hàng hoặc email tiếp thị. Ngoại trừ các
                  trường hợp chúng tôi bắt buộc phải làm như vậy theo luật (ví
                  dụ: thông báo cho bạn về việc vi phạm dữ liệu), bạn sẽ có cơ
                  hội hủy đăng ký nhận các tin nhắn này miễn phí.
                  <p></p>
                  <p></p>
                  <h2>Dữ liệu của bạn, bản quyền của bạn </h2>
                  Bạn có quyền được thông báo về Dữ liệu cá nhân được xử lý bởi
                  heatmap, quyền cải chính / chỉnh sửa, xóa và hạn chế xử lý.
                  Bạn cũng có quyền nhận từ heatmap một định dạng Dữ liệu Cá
                  nhân có cấu trúc, phổ biến và có thể đọc được bằng máy mà bạn
                  đã cung cấp cho chúng tôi.
                  <p></p>
                  <p>
                    Chúng tôi chỉ có thể nhận dạng bạn qua địa chỉ email của bạn
                    và chúng tôi chỉ có thể tuân thủ yêu cầu của bạn và cung cấp
                    thông tin nếu chúng tôi có Dữ liệu cá nhân về bạn thông qua
                    bạn đã liên hệ trực tiếp với chúng tôi và / hoặc bạn sử dụng
                    trang web và / hoặc dịch vụ của chúng tôi. Chúng tôi không
                    thể cung cấp, chỉnh sửa hoặc xóa bất kỳ dữ liệu nào chúng
                    tôi lưu trữ thay mặt cho người dùng hoặc khách hàng của
                    chúng tôi.
                  </p>
                  <p>
                    Để thực hiện bất kỳ quyền nào được đề cập trong Chính sách
                    bảo mật này và / hoặc trong trường hợp có câu hỏi hoặc nhận
                    xét liên quan đến việc sử dụng Dữ liệu cá nhân, bạn có thể
                    liên hệ với nhóm hỗ trợ của heatmap tựa: dpo@heatmap.com.
                  </p>
                  <p>
                    Khi bạn đã đồng ý, bạn có thể rút lại bất cứ lúc nào, mà
                    không ảnh hưởng đến tính hợp pháp của việc xử lý được thực
                    hiện trước khi rút. Bất cứ khi nào bạn rút lại sự đồng ý,
                    bạn thừa nhận và chấp nhận rằng điều này có thể có ảnh hưởng
                    tiêu cực đến chất lượng của Trang web và / hoặc Dịch vụ của
                    heatmap. Bạn cũng đồng ý rằng heatmap sẽ không chịu trách
                    nhiệm đối với bất kỳ tổn thất và / hoặc thiệt hại nào đối
                    với Dữ liệu Cá nhân của bạn nếu bạn chọn rút lại sự đồng ý.
                  </p>
                  <p>
                    Khi Dữ liệu Cá nhân được xử lý cho các mục đích trên trên cơ
                    sở lợi ích hợp pháp của heatmap, theo GDPR, bạn có thể phản
                    đối việc xử lý đó bất cứ lúc nào. Để làm như vậy xin vui
                    lòng liên hệ: support@heatmap.com.
                  </p>
                  <p>
                    Ngoài ra, bạn có quyền khiếu nại với cơ quan bảo vệ dữ liệu
                    trong phạm vi quyền hạn của mình.
                  </p>
                  <p></p>
                  <h2>Thời gian xử lý </h2>
                  Chúng tôi sẽ lưu trữ dữ liệu sử dụng của bạn cho đến khi bạn
                  rút lại sự đồng ý của bạn để chúng tôi làm như vậy. Tất cả các
                  dữ liệu khác như được chỉ định ở trên sẽ được lưu giữ miễn là
                  cần thiết cho (các) mục đích mà chúng tôi đã thu thập ban đầu.
                  Chúng tôi cũng có thể giữ lại thông tin theo yêu cầu của pháp
                  luật.
                  <p></p>
                  <p></p>
                  <h2>Sửa đổi chính sách bảo mật này </h2>
                  Thỉnh thoảng chúng tôi có thể sửa đổi Chính sách quyền riêng
                  tư này. Phiên bản mới nhất của Chính sách quyền riêng tư này
                  sẽ chi phối các hoạt động của chúng tôi trong việc thu thập,
                  xử lý và tiết lộ dữ liệu cá nhân. Chúng tôi sẽ cung cấp thông
                  báo về bất kỳ sửa đổi nào bằng cách đăng thông báo bằng văn
                  bản trên trang web của chúng tôi.
                  <p></p>
                  <p>
                    Nếu bạn có tài khoản với chúng tôi, chúng tôi sẽ thông báo
                    cho bạn về bất kỳ sửa đổi quan trọng nào bằng cách gửi email
                    đến địa chỉ email được liên kết với tài khoản của bạn trừ
                    khi bạn đã hủy đăng ký khỏi tất cả các liên lạc qua email.
                    Việc bạn sử dụng trang web và / hoặc Dịch vụ sau ngày có
                    hiệu lực của bất kỳ sửa đổi nào đối với Chính sách quyền
                    riêng tư sẽ cấu thành sự chấp nhận của bạn đối với Chính
                    sách quyền riêng tư, như đã sửa đổi. Tất cả các thay đổi đối
                    với Chính sách quyền riêng tư này sẽ tự động có hiệu lực vào
                    đầu ngày bạn sử dụng trang web và / hoặc dịch vụ hoặc 30
                    ngày theo lịch sau khi chúng được đăng lần đầu trên trang
                    web của chúng tôi. Việc bạn sử dụng trang web và / hoặc dịch
                    vụ sau ngày có hiệu lực của bất kỳ sửa đổi nào đối với Chính
                    sách quyền riêng tư này sẽ cấu thành sự chấp nhận của bạn
                    đối với Chính sách quyền riêng tư, như đã sửa đổi.
                  </p>
                  <p></p>
                  <h2>Người dùng cuối (End Users)</h2>
                  <strong>
                    <i>
                      Nếu bạn là khách truy cập của Trang web kích hoạt
                      heatmap, phần này áp dụng cho bạn.
                    </i>
                    Phần này phải luôn được đọc cùng với Chính sách quyền riêng
                    tư cụ thể của Trang web kích hoạt heatmap, trong đó sẽ có
                    thêm thông tin chi tiết về việc xử lý dữ liệu cá nhân của
                    bạn bởi Trang web kích hoạt heatmap.{" "}
                  </strong>
                  <p></p>
                  <p>
                    Bạn có thể biết thêm thông tin về heatmap bằng cách truy
                    cập phần ‘về heatmap Cách của trang web hỗ trợ của chúng
                    tôi. heatmap hỗ trợ người dùng / khách hàng của mình cung
                    cấp cho người dùng cuối trải nghiệm và dịch vụ tốt hơn cũng
                    như hỗ trợ họ chẩn đoán các sự cố kỹ thuật và phân tích xu
                    hướng người dùng. Quan trọng nhất, thông qua các dịch vụ
                    heatmap, chức năng của Trang web kích hoạt heatmap có thể
                    được cải thiện, giúp chúng trở nên thân thiện hơn, có giá
                    trị hơn và sử dụng đơn giản hơn cho người dùng cuối.
                  </p>
                  <p>
                    Bạn có thể từ chối nhận heatmap thu thập thông tin của mình
                    khi truy cập Trang web được kích hoạt heatmap bất cứ lúc
                    nào bằng cách truy cập trang Từ chối của chúng tôi và nhấp
                    vào ‘Tắt heatmap, hoặc bật Không theo dõi (DNT) trong trình
                    duyệt của bạn.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer theme="white" />
      </main>
    );
  }
}
