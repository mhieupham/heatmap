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

export default class Terms extends React.PureComponent {
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
                  {"Điều khoản sử dụng dữ liệu"}
                </h1>
                <em>{"Sửa đổi lần cuối: 27 tháng 11 năm 2019"}</em>
                <hr />
                <div className="page">
                  <p>
                    Các Điều khoản dịch vụ này (Thỏa thuận hợp đồng trực tuyến)
                    là một thỏa thuận pháp lý giữa Bạn với tư cách là người dùng
                    và heatmap , một công ty cổ phần được đăng ký theo Luật
                    pháp Việt Nam ,có địa chỉ đăng ký tại Số Nhà 299 ngách 1 Ngõ
                    236 Hoàng Quốc Việt. Phường cổ Nhuế 1. Bắc từ liêm Hà Nội
                    Việt Nam (heatmap, hoặc "Chúng tôi” Của chúng tôi” hoặc
                    “Chúng ta”), chi phối quyền hạn chế, không độc quyền và có
                    thể chấm dứt của bạn đối với việc sử dụng Trang web và dịch
                    vụ heatmap như được định nghĩa ở đây. Bằng cách nhấp vào
                    nút "Bắt đầu sử dụng heatmap" hoặc sử dụng Dịch vụ, bạn
                    đồng ý bị ràng buộc bởi các điều khoản của Thỏa thuận này.
                  </p>
                  <p>
                    Nếu Bạn không đồng ý với Thỏa thuận này, Bạn không được đăng
                    ký Tài khoản và sẽ không sử dụng bất kỳ Dịch vụ hoặc Trang
                    web nào. Khi đồng ý với Thỏa thuận này, Bạn thừa nhận rằng
                    Bạn đã đọc Thỏa thuận này, hiểu nó và đồng ý bị ràng buộc
                    bởi các điều khoản và điều kiện của nó.
                  </p>
                  <p>
                    Chúng tôi có thể sửa đổi Thỏa thuận này theo thời gian.
                    Chúng tôi sẽ cung cấp cho Bạn thông báo trước về các sửa đổi
                    qua email đến email liên quan đến Tài khoản của bạn và bằng
                    cách đăng thông báo bằng văn bản trên Trang web của chúng
                    tôi và Bạn đồng ý rằng điều này sẽ tạo thành thông báo đầy
                    đủ về vấn đề này. Tất cả các điều khoản được sửa đổi sẽ tự
                    động có hiệu lực vào đầu ngày Bạn sử dụng Trang web và /
                    hoặc Dịch vụ hoặc 30 ngày theo lịch sau khi chúng được đăng
                    lần đầu trên Trang web. Việc bạn sử dụng Trang web và / hoặc
                    Dịch vụ sau ngày có hiệu lực của bất kỳ sửa đổi nào đối với
                    Thỏa thuận này sẽ cấu thành sự chấp nhận của bạn đối với
                    Thỏa thuận, như đã sửa đổi.
                  </p>
                  <p></p>
                  <h2>1. Định nghĩa</h2>
                  Tài khoản của người khác có nghĩa là một tài khoản với
                  heatmap để sử dụng Dịch vụ;
                  <p></p>
                  <p>
                    Thỏa thuận của Hiệp hội có nghĩa là các Điều khoản dịch vụ
                    này, bao gồm mọi phụ lục kèm theo, tạo thành một phần không
                    thể tách rời và trong tổng thể của chúng, chi phối mối quan
                    hệ của bạn với heatmap;
                  </p>
                  <p>
                    Luật áp dụng Luật của Viêt Nam, nơi heatmap được hợp nhất
                    và Quy định (EU) 2016/679, Quy định bảo vệ dữ liệu chung
                    (GDPR) và bất kỳ luật nào khác có thể áp dụng theo thời
                    gian;
                  </p>
                  <p>
                    Thông tin bảo mật của Bí mật, có nghĩa là tất cả thông tin
                    do Bạn hoặc chúng tôi cung cấp (Bên tiết lộ của nhóm Tiết
                    kiệm), cho bên kia (Bên nhận của Đảng Nhận), dù bằng miệng
                    hay bằng văn bản, thông tin nào được chỉ định là bí mật. Với
                    điều kiện là cho tất cả các mục đích và mục đích, Thông tin
                    Bí mật sẽ không được hiểu là bao gồm bất kỳ thông tin nào
                    (a) được biết công khai tại thời điểm tiết lộ hoặc sau đó
                    được biết đến công khai mà không có lỗi của Bên nhận; (b)
                    được phát hiện hoặc tạo ra bởi Bên nhận trước khi tiết lộ
                    bởi Bên tiết lộ; (c) được Bên nhận nhận được thông qua các
                    phương tiện hợp pháp khác với từ Đại diện của Bên tiết lộ
                    hoặc Đại diện của Bên tiết lộ; hoặc (d) được tiết lộ bởi Bên
                    nhận với sự chấp thuận trước bằng văn bản của Bên tiết lộ;
                  </p>
                  <p>
                    Dữ liệu dữ liệu có nghĩa là nội dung, dữ liệu cá nhân, thông
                    tin, bí quyết và thông tin bí mật liên quan đến doanh nghiệp
                    của bạn, một số thông tin có thể không được công khai, bao
                    gồm nhưng không giới hạn thông tin kỹ thuật và thương mại
                    liên quan đến Bạn hoặc bất kỳ công ty mẹ nào của bạn hoặc
                    các công ty con, kinh doanh, hệ thống, quy trình, phần mềm
                    và dịch vụ, tùy theo từng trường hợp;
                  </p>
                  <p>
                    Quyền sở hữu trí tuệ của người Hồi giáo có nghĩa là bản
                    quyền, bao gồm các quyền về đạo đức và liên quan, quyền sử
                    dụng, tác phẩm âm nhạc, tác phẩm văn học, thiết kế, cơ sở dữ
                    liệu hoặc bất kỳ tác phẩm được bảo vệ bản quyền nào, tên
                    thương mại, định danh doanh nghiệp được bảo vệ, bằng sáng
                    chế, mô hình tiện ích và thương hiệu và tất cả các quyền sở
                    hữu công nghiệp và trí tuệ khác, trong từng trường hợp, dù
                    đã đăng ký hay chưa đăng ký, hiện đang tồn tại hoặc sẽ tồn
                    tại, hiện tại hoặc trong tương lai, ở bất kỳ nơi nào trên
                    thế giới;
                  </p>
                  <p>
                    Kiến thức về cách thức có nghĩa là không có ý nghĩa, kiến
                    ​​thức, kinh nghiệm, công thức, nghiên cứu, quy trình,
                    nghiên cứu, báo cáo, dữ liệu và thiết kế được phát triển bởi
                    và / hoặc thuộc sở hữu của bạn;
                  </p>
                  <p>
                    Dữ liệu cá nhân của Nhật Bản có nghĩa là bất kỳ thông tin
                    nào liên quan đến một thể nhân được xác định hoặc nhận dạng;
                    một thể nhân có thể nhận dạng là một người có thể được xác
                    định, trực tiếp hoặc gián tiếp, đặc biệt bằng cách tham
                    chiếu đến một mã định danh như tên, số nhận dạng, dữ liệu vị
                    trí, số nhận dạng trực tuyến hoặc một hoặc nhiều yếu tố cụ
                    thể đối với vật lý, sinh lý, di truyền, tinh thần, kinh tế,
                    văn hóa hoặc bản sắc xã hội của người tự nhiên đó;
                  </p>
                  <p>
                    Dịch vụ / sv có nghĩa là phần mềm dưới dạng dịch vụ (SaaS)
                    do heatmap cung cấp và có nhiều tài nguyên bao gồm nhưng
                    không giới hạn ở bản đồ nhiệt, bản ghi khách truy cập, kênh
                    và phân tích biểu mẫu, thăm dò phản hồi, khảo sát và các
                    chức năng khác được phát triển và giới thiệu bởi heatmap
                    theo thời gian và như được mô tả thêm trên Trang web trong
                    Chuyến tham quan sản phẩm của chúng tôi;
                  </p>
                  <p>
                    Trang web của s / có nghĩa là trang web heatmap.com, ngoài
                    bất kỳ trang phụ nào được tích hợp trong trang web này;
                  </p>
                  <p>
                    Kế hoạch đăng ký của Nhật Bản có nghĩa là một trong những
                    gói thuê bao khác nhau mà bạn có thể sử dụng Dịch vụ như
                    được mô tả thêm trong Chuyến tham quan sản phẩm của chúng
                    tôi;
                  </p>
                  <p>
                    Thời hạn đăng ký của Nhật Bản có nghĩa là khoảng thời gian
                    đăng ký Dịch vụ sẽ được heatmap cung cấp cho Bạn, tùy theo
                    việc bạn tuân thủ các nghĩa vụ được thực hiện theo Thỏa
                    thuận này;
                  </p>
                  <p>
                    Bên thứ ba / ies, có nghĩa là bất kỳ người nào, dù hợp pháp
                    hay tự nhiên, không phải là Bạn cũng không phải heatmap;
                  </p>
                  <p>
                    Thời gian dùng thử có nghĩa là heatmap có nghĩa là quyền
                    truy cập miễn phí được cung cấp cho Bạn bởi heatmap trong
                    một khoảng thời gian giới hạn và được thiết lập cho Dịch vụ,
                    được cấp theo quyết định riêng của heatmap, quyền truy cập
                    có thể bị heatmap thu hồi bất cứ lúc nào mà không cần bất
                    kỳ thông báo trước;
                  </p>
                  <p>
                    Bạn có thể có nghĩa là một người, dù là tự nhiên hay hợp
                    pháp, hoạt động trong quá trình giao dịch hoặc kinh doanh và
                    đồng ý chịu ràng buộc bởi các điều khoản trong Thỏa thuận
                    này.
                  </p>
                  <p></p>
                  <h2>2. Đăng ký, truy cập và tiết lộ tài khoản </h2>
                  2.1. Để sử dụng Trang web và hưởng lợi từ Dịch vụ của chúng
                  tôi, Bạn phải tạo Tài khoản bằng cách hoàn thành biểu mẫu đăng
                  ký, bằng cách cung cấp cho chúng tôi tất cả thông tin bắt buộc
                  và kích hoạt hộp kiểm Tôi chấp nhận hộp kiểm Điều khoản dịch
                  vụ và nhấp vào "Bắt đầu sử dụng heatmap " cái nút. Bạn đồng ý
                  cung cấp cho chúng tôi thông tin đầy đủ và chính xác khi đăng
                  ký và để thông tin đó chính xác và cập nhật trong suốt quá
                  trình bạn sử dụng Dịch vụ của chúng tôi. Bạn nên giữ bí mật
                  thông tin đăng nhập của mình và không được tiết lộ thông tin
                  này cho bất kỳ ai. Chúng tôi sẽ không chịu trách nhiệm cho
                  việc truy cập trái phép vào Tài khoản của bạn phát sinh từ
                  việc bạn không giữ thông tin đăng nhập của bạn an toàn và bảo
                  mật.
                  <p></p>
                  <p>
                    2.2. Nếu Bạn đang sử dụng Trang web hoặc Dịch vụ cho và nhân
                    danh pháp nhân, bạn có thể làm như vậy bằng cách tạo một Tài
                    khoản riêng với heatmap hoặc bằng cách thêm một trang web
                    tổ chức mới vào Tài khoản hiện tại của bạn. Bất kỳ Tài khoản
                    riêng biệt hoặc trang web tổ chức mới nào trong Tài khoản
                    hiện tại của bạn sẽ chịu sự điều chỉnh của các điều khoản và
                    điều kiện được quy định trong Thỏa thuận này và như được nêu
                    chi tiết hơn trong điều 2.6 dưới đây. Nếu Bạn đang sử dụng
                    Trang web hoặc Dịch vụ cho và nhân danh pháp nhân, Bạn sẽ,
                    và sẽ được coi là được trao quyền bởi và / hoặc được ủy
                    quyền hợp pháp cho và thay mặt cho pháp nhân đó và Bạn và
                    pháp nhân sẽ được cùng và nghiêm khắc tuân theo Thỏa thuận
                    này. Nếu Bạn không còn là đại diện được ủy quyền hợp pháp
                    của pháp nhân, Bạn có trách nhiệm thông báo ngay cho
                    heatmap, trong trường hợp đó, pháp nhân sẽ vẫn phải tuân
                    theo Thỏa thuận và pháp nhân sẽ tiếp tục thông báo cho
                    heatmap về người được ủy quyền mới Tiêu biểu. Cho đến khi
                    một đại diện ủy quyền mới được thông báo cho heatmap, Bạn
                    sẽ vẫn chịu trách nhiệm như đã nói ở trên. heatmap sẽ không
                    chịu trách nhiệm nếu một người không có quyền lực cần thiết
                    / người không được ủy quyền hợp lệ tham gia Thỏa thuận này
                    cho và thay mặt cho một pháp nhân.
                  </p>
                  <p>
                    2.3. Chúng tôi bảo lưu quyền cho chúng tôi, nhà thầu của
                    chúng tôi hoặc nhân viên của chúng tôi, sau khi có được sự
                    đồng ý trước của bạn, để truy cập Tài khoản của bạn và thông
                    tin mà bạn đã cung cấp cho các mục đích hỗ trợ, bảo trì và
                    phục vụ hoặc vì bất kỳ lý do liên quan đến bảo mật, kỹ thuật
                    hoặc thanh toán nào.
                  </p>
                  <p>
                    2.4. Bạn có trách nhiệm bảo vệ Dữ liệu Cá nhân của mình và
                    duy trì bảo mật thông tin và mật khẩu người dùng của bạn.
                    Bạn cũng có trách nhiệm thông báo kịp thời cho heatmap về
                    bất kỳ việc sử dụng trái phép tài khoản của bạn hoặc vi phạm
                    thông tin hoặc mật khẩu tài khoản của bạn. Trong trường hợp
                    tổn thất đó không được gây ra do sơ suất thô sơ, hành vi sai
                    trái cố ý, lừa đảo hoặc đức tin xấu của heatmap, heatmap
                    sẽ không chịu trách nhiệm cho bất kỳ tổn thất nào mà bạn có
                    thể phải chịu do người khác sử dụng tên người dùng hoặc mật
                    khẩu của bạn, hoặc có hoặc không có kiến ​​thức của bạn.
                    Trong phạm vi được Luật áp dụng cho phép, Bạn phải chịu mọi
                    chi phí, bao gồm phí sử dụng và tiền phạt, lệ phí, bản án
                    dân sự và phí luật sư hợp lý cho việc bạn không cố ý hoặc sơ
                    suất để bảo vệ thông tin mật khẩu và người dùng và / hoặc
                    thông báo kịp thời cho heatmap về bất kỳ việc sử dụng trái
                    phép Tài khoản của bạn hoặc vi phạm thông tin hoặc mật khẩu
                    Tài khoản của bạn.
                  </p>
                  <p>2.5. Nếu bạn là:</p>
                  <ul>
                    <li>
                      một công ty mẹ sở hữu cổ phần đa số (51% trở lên) trong
                      một công ty con hoặc pháp nhân khác; hoặc là
                    </li>
                    <li>
                      một công ty con hoặc pháp nhân khác, thuộc sở hữu của một
                      công ty mẹ sở hữu cổ phần đa số (51% trở lên); và
                    </li>
                    <li>
                      muốn gia hạn Thỏa thuận này cho công ty mẹ của bạn hoặc
                      các công ty con của bạn, tùy theo từng trường hợp, Bạn có
                      thể làm như vậy bằng cách tạo một Tài khoản riêng với
                      heatmap hoặc bằng cách thêm một trang web tổ chức mới vào
                      Tài khoản hiện tại của bạn. Bất kỳ Tài khoản riêng biệt
                      hoặc trang web tổ chức mới nào trong Tài khoản hiện tại
                      của bạn sẽ chịu sự điều chỉnh của các điều khoản và điều
                      kiện được quy định trong Thỏa thuận này.
                    </li>
                  </ul>
                  <p></p>
                  <p>
                    2.6. Trong trường hợp có thể, công ty mẹ hoặc công ty con
                    của bạn sẽ được coi là người thụ hưởng bên thứ ba của Thỏa
                    thuận này với các quyền và nghĩa vụ tương tự được quy định
                    cho Bạn và heatmap theo Thỏa thuận này và sẽ chịu mọi trách
                    nhiệm và nghĩa vụ như thể công ty mẹ hoặc công ty con như
                    vậy, tùy theo từng trường hợp, là Bạn.
                  </p>
                  <p></p>
                  <h2>3. Mức độ dịch vụ</h2>
                  3.1. Phạm vi của (các) Dịch vụ mà Bạn có thể có quyền truy cập
                  có thể phụ thuộc vào Kế hoạch đăng ký có liên quan, Thời hạn
                  đăng ký và thanh toán phí dịch vụ tương ứng và kịp thời cho
                  heatmap.
                  <p></p>
                  <p></p>
                  <h2>4. Đăng ký </h2>
                  4.1. Chúng tôi cung cấp một số gói đăng ký khác nhau cho các
                  dịch vụ của chúng tôi. Kế hoạch hạn đăng ký áp dụng tùy thuộc
                  vào sự lựa chọn của bạn. Gói đăng ký của bạn được chọn trong
                  quá trình đăng ký tài khoản của bạn và bạn có thể chọn thay
                  đổi gói của mình bất cứ lúc nào. Thông tin về các gói tiêu
                  chuẩn của chúng tôi có thể được tìm thấy trên trang Giá của
                  chúng tôi. Tất cả các khoản phí được trích dẫn trên trang web
                  của chúng tôi không bao gồm thuế VAT hoặc bất kỳ khoản thuế
                  nào khác có thể được áp dụng trong phạm vi quyền hạn của bạn.
                  Để biết thêm thông tin về Gói đăng ký của chúng tôi, vui lòng
                  Liên hệ với chúng tôi. Bạn có thể nâng cấp hoặc hạ cấp Đăng ký
                  của mình bất cứ lúc nào trong Thời hạn đăng ký của bạn, theo
                  đó chúng tôi sẽ áp dụng các khoản phí tương ứng trên cơ sở
                  pro-rata.
                  <p></p>
                  <p>
                    4.2. Theo Điều khoản đăng ký hiện tại của bạn, Chúng tôi có
                    quyền sửa đổi Kế hoạch đăng ký và / hoặc Thời hạn đăng ký
                    bất cứ lúc nào hoặc đưa ra các khoản phí mới và / hoặc mức
                    hoặc mức phí đăng ký. Chúng tôi sẽ cung cấp cho Bạn ba mươi
                    (30) ngày theo lịch Thông báo bằng văn bản trước khi bạn có
                    quyền hủy đăng ký hoặc thay đổi Gói đăng ký hiện tại của
                    mình, nếu bạn không đồng ý với những sửa đổi này.
                  </p>
                  <p></p>
                  <h2>5. Thời hạn đăng ký và gia hạn</h2>
                  5.1. Giai đoạn thử nghiệm. Thời hạn của thời gian dùng thử
                  được chỉ định trong quá trình tạo Tài khoản. Vào cuối thời
                  gian dùng thử, Bạn sẽ được nhắc nhập chi tiết thanh toán của
                  mình nếu Bạn chưa làm như vậy. Nếu bạn đã cập nhật chi tiết
                  thanh toán của mình, thẻ tín dụng hoặc tài khoản PayPal của
                  bạn sẽ được tự động tính phí vào ngày thanh toán được hiển thị
                  trên phần thanh toán được liên kết với Tài khoản của bạn trên
                  Trang web của chúng tôi.
                  <p></p>
                  <p>
                    5.2. Thời hạn gia hạn. Trừ khi heatmap được thông báo bằng
                    văn bản ít nhất ba doanh nghiệp (3) ngày trước khi kết thúc
                    Thời hạn đăng ký hiện tại của bạn (hoặc bất kỳ Điều khoản
                    gia hạn tiếp theo nào) mà bạn không có ý định gia hạn đăng
                    ký của mình, Bạn sẽ được đăng ký tự động gia hạn chu kỳ cho
                    cùng một thuật ngữ khi kết thúc Thời hạn đăng ký (Thời hạn
                    đổi mới của Gia đình). Điều này áp dụng cho tất cả các Gói
                    đăng ký liên quan đến thanh toán và hoạt động như nhau cho
                    cả gia hạn hàng tháng và hàng năm. Bất kỳ thông báo bằng văn
                    bản nào về ý định không gia hạn của bạn sẽ được cung cấp cho
                    địa chỉ email sau: support@heatmap.com. Email phải đến từ
                    chủ sở hữu Tài khoản heatmap đã đăng ký.
                  </p>
                  <p></p>
                  <h2>6. Chấm dứt </h2>
                  6.1. Bạn hoặc Chúng tôi có thể chấm dứt Thỏa thuận này vì lý
                  do vi phạm nghiêm trọng bởi bên kia của các điều khoản trong
                  Thỏa thuận này, nếu bên mặc định không khắc phục vi phạm tài
                  liệu đó trong vòng mười lăm (15) ngày kể từ ngày nhận được văn
                  bản thông báo vi phạm từ bên không mặc định. Ngoài ra, chúng
                  tôi có thể chấm dứt ngay Thỏa thuận này nếu Bạn: (i) chấm dứt
                  các hoạt động kinh doanh của bạn hoặc mất khả năng thanh toán;
                  (ii) thừa nhận bằng văn bản về việc không có khả năng thanh
                  toán các khoản nợ của bạn khi chúng đáo hạn; (Iii) thực hiện
                  một nhiệm vụ vì lợi ích của các chủ nợ; (iv) trở thành đối
                  tượng kiểm soát trực tiếp của người ủy thác, người nhận hoặc
                  cơ quan tương tự; hoặc (v) không thanh toán các khoản phí khi
                  đến hạn theo Kế hoạch đăng ký của bạn. Trong trường hợp Thỏa
                  thuận này bị chấm dứt vì lý do vi phạm tài liệu chưa được xử
                  lý của bạn, Bạn đồng ý, mà không giới hạn bất kỳ quyền hoặc
                  biện pháp khắc phục nào khác của chúng tôi, để thanh toán tất
                  cả các khoản phí còn lại phải trả trong suốt thời hạn còn lại
                  của Điều khoản của bạn.
                  <p></p>
                  <p>
                    6.2. Trong trường hợp Thỏa thuận này bị chấm dứt vì lý do
                    của bạn do vi phạm tài liệu chưa được xử lý của chúng tôi,
                    Bạn sẽ được hoàn trả tất cả các khoản phí trước đây cho
                    chúng tôi kể từ ngày chấm dứt cho đến khi kết thúc Thời hạn
                    đăng ký.
                  </p>
                  <p>
                    6.3. Bạn có thể chấm dứt Thỏa thuận này bằng cách yêu cầu
                    Tài khoản của bạn bị vô hiệu hóa và bị xóa trong khi đăng
                    nhập vào Dịch vụ. heatmap cũng có thể chấm dứt Quyền sử
                    dụng Trang web và / hoặc Dịch vụ của bạn có hoặc không có lý
                    do bất cứ lúc nào. heatmap sẽ thông báo cho bạn qua email
                    đến tài khoản email đã đăng ký của bạn nếu chúng tôi chấm
                    dứt tài khoản của bạn. Nghĩa vụ của bạn để thanh toán các
                    khoản phí và lệ phí tích lũy tính đến ngày chấm dứt, sẽ tồn
                    tại khi có bất kỳ chấm dứt Thỏa thuận này. Trong trường hợp
                    có bất kỳ chấm dứt Thỏa thuận này, các hạn chế đối với việc
                    bạn sử dụng Dịch vụ như quy định tại Khoản 7 và các bảo đảm
                    của chúng tôi như quy định tại Khoản 10 sẽ tồn tại khi chấm
                    dứt như vậy.
                  </p>
                  <p>
                    6.4. Khi hết hạn Đăng ký hoặc chấm dứt, bất kể khi nào, Kế
                    hoạch đăng ký của bạn sẽ chấm dứt ngay lập tức và do đó, Bạn
                    có thể sử dụng phiên bản Dịch vụ miễn phí.
                  </p>
                  <p></p>
                  <h2>7. Giấy phép hạn chế</h2>
                  7.1. Theo Thỏa thuận này, heatmap cấp cho Bạn giấy phép hạn
                  chế, có thể hủy bỏ, không độc quyền, không thể chuyển nhượng
                  và không thể chuyển nhượng để sử dụng Trang web và / hoặc truy
                  cập Dịch vụ dưới dạng phần mềm dưới dạng dịch vụ (SaaS) cho
                  doanh nghiệp và thương mại sử dụng theo các điều khoản khác
                  của Thỏa thuận này. Bạn đồng ý không bán lại bất kỳ phần nào
                  của Dịch vụ. Bạn không được chuyển nhượng, cho thuê, cấp phép
                  phụ, sửa đổi, thiết kế ngược, dịch ngược hoặc phân tách Trang
                  web và / hoặc bất kỳ phần nào của Dịch vụ. Bạn không được sao
                  chép, điều chỉnh, thay đổi, sửa đổi, dịch hoặc tạo các tác
                  phẩm phái sinh của Trang web và / hoặc Dịch vụ mà không có sự
                  cho phép trước bằng văn bản của heatmap. Bạn tuyên bố và bảo
                  đảm rằng Bạn sẽ không sử dụng Dịch vụ cho mục đích bất hợp
                  pháp hoặc để truyền thông tin có thể được phân loại là bất hợp
                  pháp, bôi nhọ, lạm dụng, tục tĩu hoặc vi phạm bất kỳ quyền
                  nào, kể cả Quyền sở hữu trí tuệ của người khác.
                  <p></p>
                  <p>
                    7.2. Bạn sẽ không cho phép các bên thứ ba sử dụng Dịch vụ,
                    ngoại trừ các điều khoản 2.5 và 2.6 ở trên, bao gồm nhưng
                    không giới hạn việc sử dụng chung thông qua kết nối mạng,
                    ngoại trừ theo các điều khoản của Thỏa thuận này.
                  </p>
                  <p>
                    7.3. Để bảo vệ Quyền Sở hữu Trí tuệ đối với Dịch vụ, Bạn
                    không được phá vỡ hoặc vô hiệu hóa bất kỳ tính năng hoặc
                    biện pháp công nghệ nào trong Dịch vụ. Bạn không được sử
                    dụng Dịch vụ, bao gồm kết hợp với mọi thiết bị, chương trình
                    hoặc dịch vụ được thiết kế để phá vỡ mọi biện pháp công nghệ
                    đã triển khai, trong nỗ lực kiểm soát quyền truy cập hoặc
                    quyền đối với tệp nội dung hoặc tác phẩm khác được bảo vệ
                    bởi quyền sở hữu trí tuệ luật pháp
                  </p>
                  <p>
                    7.4. Bất kỳ việc sử dụng bị cấm nào như chi tiết ở trên sẽ
                    cấu thành vi phạm nghiêm trọng Thỏa thuận này và sẽ nhắc
                    chúng tôi, theo quyết định của chúng tôi, ngay lập tức chấm
                    dứt quyền truy cập Dịch vụ của bạn. Bất kỳ vi phạm Điều
                    khoản này sẽ khiến Bạn phải chịu trách nhiệm cho các thiệt
                    hại mà heatmap phải chịu.
                  </p>
                  <p></p>
                  <h2>8. Quyền sở hữu</h2>
                  8.1. Trừ khi có quy định khác trong tài liệu này, tất cả các
                  quyền, tiêu đề và lợi ích trên Trang web và / hoặc Dịch vụ và
                  bất kỳ nội dung nào trong đó là tài sản độc quyền của
                  heatmap. Trừ khi có quy định khác, Dịch vụ chỉ dành cho mục
                  đích sử dụng hạn chế của bạn và nếu Bạn sao chép hoặc tải
                  xuống bất kỳ thông tin nào từ Trang web và / hoặc Dịch vụ này,
                  Bạn đồng ý rằng Bạn sẽ không xóa hoặc làm mờ bất kỳ bản quyền
                  hoặc thông báo hoặc truyền thuyết nào khác có trong bất kỳ
                  thông tin nào như vậy.
                  <p></p>
                  <p>
                    8.2. Bạn không được sửa đổi, sao chép, phân phối, truyền,
                    hiển thị, thực hiện, tái tạo, xuất bản, giấy phép, khung,
                    tạo các tác phẩm phái sinh từ, chuyển nhượng, hoặc sử dụng
                    theo bất kỳ cách nào khác cho mục đích thương mại hoặc công
                    cộng, toàn bộ hoặc một phần, bất kỳ thông tin, phần mềm, sản
                    phẩm hoặc Dịch vụ thu được từ Trang web và / hoặc Dịch vụ,
                    ngoại trừ các mục đích được cung cấp rõ ràng ở đây, mà không
                    có sự chấp thuận trước bằng văn bản của heatmap.
                  </p>
                  <p>
                    8.3. Ngoại trừ các Quyền sở hữu trí tuệ đã được sở hữu, đăng
                    ký hoặc trao cho Tên của bạn hoặc các Quyền sở hữu trí tuệ
                    được tạo bởi hoặc cho Bạn trong suốt thời gian của Thỏa
                    thuận này, tất cả các nhãn hiệu heatmap, tên thương mại,
                    nhãn hiệu dịch vụ, logo và các loại khác Quyền sở hữu trí
                    tuệ trong và đối với Trang web và Dịch vụ là độc quyền của
                    heatmap. Việc sử dụng bất kỳ nhãn hiệu nào trên Trang web
                    và Dịch vụ dưới bất kỳ hình thức nào khác ngoài được cho
                    phép trong Thỏa thuận này, hoặc được ủy quyền bằng văn bản
                    của heatmap, sẽ bị nghiêm cấm.
                  </p>
                  <p>
                    8.4. Tất cả các nhãn hiệu, tên thương mại, nhãn hiệu dịch vụ
                    và logo của bạn là độc quyền của Bạn. Việc sử dụng bất kỳ
                    nhãn hiệu nào của heatmap dưới bất kỳ hình thức nào khác
                    ngoài được cho phép trong Thỏa thuận này hoặc được ủy quyền
                    bằng văn bản của Bạn đều bị nghiêm cấm.
                  </p>
                  <p>
                    8,5. Trong quá trình thực hiện Dịch vụ, heatmap sẽ có quyền
                    truy cập vào một số Dữ liệu của bạn. Tất cả các quyền, tiêu
                    đề và lợi ích trong Dữ liệu là tài sản độc quyền của bạn,
                    trừ khi được quy định khác trong Thỏa thuận này.
                  </p>
                  <p>
                    8.6. heatmap không được sửa đổi, sao chép, phân phối,
                    truyền, hiển thị, thực hiện, tái tạo, xuất bản, cấp phép,
                    đóng khung, tạo các tác phẩm phái sinh từ, chuyển nhượng,
                    hoặc sử dụng theo bất kỳ cách nào khác cho mục đích thương
                    mại hoặc công cộng, toàn bộ hoặc một phần, bất kỳ Dữ liệu
                    của bạn thuộc về Bạn, ngoại trừ mục đích cung cấp dịch vụ
                    thực hiện các Dịch vụ được cung cấp rõ ràng trong tài liệu
                    này mà không cần bất kỳ nhu cầu phê duyệt hoặc chấp thuận
                    nào trước đó từ Bạn.
                  </p>
                  <p>
                    8.7. Để tránh nghi ngờ, heatmap sẽ giữ bí mật Dữ liệu của
                    bạn và bảo mật Thông tin Bí mật của bạn một cách nghiêm ngặt
                    nhất. Về mặt này, heatmap sẽ không tiết lộ hoặc cho phép
                    tiết lộ Dữ liệu của bạn cho bất kỳ người trái phép nào và sẽ
                    chỉ sử dụng hạn chế đến mức cần thiết cho heatmap để thực
                    hiện Dịch vụ. Để tránh nghi ngờ, tất cả các quyền như vậy
                    đối với heatmap sử dụng Dữ liệu của bạn sẽ chỉ được cấp
                    trong suốt thời hạn của Thỏa thuận này và theo Chính sách
                    bảo mật của chúng tôi.
                  </p>
                  <p>
                    8.8. Bạn thừa nhận và đồng ý rằng heatmap có thể tiết lộ
                    bất kỳ Dữ liệu nào nếu pháp luật yêu cầu hoặc tin tưởng rằng
                    việc bảo quản hoặc tiết lộ đó là cần thiết một cách hợp lý
                    để: (a) tuân thủ quy trình pháp lý; (b) thi hành Thỏa thuận
                    này; (c) phản hồi các khiếu nại rằng bất kỳ nội dung và /
                    hoặc Dữ liệu nào của bạn vi phạm quyền của Bên thứ ba; hoặc
                    (d) bảo vệ quyền, tài sản hoặc an toàn cá nhân của heatmap,
                    Trang web, Dịch vụ, người dùng và công chúng.
                  </p>
                  <p>
                    8,9. Trong trường hợp Bạn cung cấp cho heatmap bất kỳ phản
                    hồi, đề xuất, nhận xét hoặc cải tiến nào liên quan đến Trang
                    web và / hoặc Dịch vụ, Bạn sẽ cấp cho heatmap một quyền và
                    giấy phép miễn phí không thể hủy bỏ, cấp phép và bản quyền
                    để sử dụng, sao chép, tiết lộ, cấp phép và phân phối các
                    phản hồi, đề xuất, nhận xét hoặc cải tiến đó dưới bất kỳ
                    hình thức nào mà không có bất kỳ nghĩa vụ nào, dưới bất kỳ
                    hình thức nào, đối với Bạn. Không có gì trong Thỏa thuận này
                    được hiểu là một hạn chế đối với heatmap để sử dụng, phát
                    triển và tiếp thị bất kỳ Dịch vụ nào kết hợp với phản hồi,
                    đề xuất, nhận xét hoặc cải tiến mà bạn đã cung cấp.
                  </p>
                  <p>
                    8.10. Để tránh nghi ngờ, tất cả các quyền như vậy đối với
                    heatmap sử dụng Dữ liệu của bạn sẽ chỉ được cấp trong suốt
                    thời gian của Thỏa thuận này.
                  </p>
                  <p></p>
                  <h2>9. Thông tin bí mật</h2>
                  9.1. Người nhận Thông tin Bí mật (Bên nhận của Liên nhận) sẽ
                  giữ và duy trì Thông tin Bí mật một cách bảo mật nghiêm ngặt
                  cho lợi ích duy nhất và duy nhất của bên kia (cho mục đích của
                  phần này, Bên tiết lộ của Đảng Tiết lộ). Bên nhận sẽ đảm bảo
                  hạn chế quyền truy cập vào Thông tin bí mật cho nhân viên, nhà
                  thầu và bên thứ ba của mình theo yêu cầu về mặt thương mại và
                  hợp lý và sẽ yêu cầu những người đó ký và tuân thủ các hạn chế
                  không tiết lộ ít nhất là bảo vệ như trong Thỏa thuận này. Bên
                  nhận sẽ không, nếu không có sự chấp thuận trước bằng văn bản
                  của Bên tiết lộ, sử dụng cho lợi ích riêng của Bên nhận, xuất
                  bản, sao chép hoặc tiết lộ cho người khác hoặc cho phép người
                  khác sử dụng vì lợi ích của họ hoặc gây bất lợi cho Bên tiết
                  lộ , bất kỳ thông tin bí mật. Bên nhận sẽ trả lại cho Bên tiết
                  lộ bất kỳ Thông tin bí mật nào và tất cả các hồ sơ, ghi chú và
                  các tài liệu bằng văn bản, in hoặc hữu hình khác liên quan đến
                  Thông tin bí mật ngay lập tức khi Bên tiết lộ yêu cầu bằng văn
                  bản.
                  <p></p>
                  <p></p>
                  <h2>10. Bảo hành</h2>
                  10.1. heatmap bảo đảm và đại diện cho Bạn rằng:
                  <ol style={{ listStyleType: "lower-alpha" }}>
                    <li>
                      {" "}
                      Quyền sở hữu trí tuệ (bao gồm nhưng không giới hạn tất cả
                      bản quyền, nhãn hiệu, quyền thiết kế, nhãn hiệu dịch vụ,
                      dù đã đăng ký hay chưa đăng ký) trong bất kỳ tài liệu nào
                      do heatmap cung cấp như một phần của Trang web và / hoặc
                      Dịch vụ không, theo hiểu biết tốt nhất của heatmap, vi
                      phạm bất kỳ quyền sở hữu trí tuệ của bên thứ ba khi được
                      sử dụng theo Thỏa thuận này;
                    </li>
                    <li>
                      {" "}
                      heatmap sẽ chỉ sử dụng Dữ liệu của bạn theo Thỏa thuận
                      này, bao gồm cả phụ lục của nó; và
                    </li>
                    <li>
                      {" "}
                      heatmap tuyên bố và bảo đảm với Bạn rằng họ có tất cả các
                      quyền và thẩm quyền cần thiết để tham gia Thỏa thuận gốc
                      và bất kỳ Hợp đồng bổ sung nào để thực hiện Dịch vụ.
                    </li>
                  </ol>
                  <p></p>
                  <p>
                    10.2. Bạn tuyên bố và bảo đảm rằng Bạn sẽ tuân thủ tất cả
                    các luật và quy định hiện hành áp dụng cho Bạn khi sử dụng
                    Dịch vụ của chúng tôi. Bạn đồng ý cung cấp và duy trì chính
                    sách bảo mật đầy đủ về mặt pháp lý, tiết lộ chính xác các
                    thực tiễn của Bạn liên quan đến việc thu thập, sử dụng và
                    tiết lộ Dữ liệu Cá nhân, bao gồm Dữ liệu Cá nhân được thu
                    thập thông qua việc bạn sử dụng Dịch vụ của chúng tôi. Bạn
                    chịu trách nhiệm xác định xem Bạn có tuân theo bất kỳ luật
                    hoặc quy định về quyền riêng tư cụ thể nào của ngành hay
                    không, bao gồm nhưng không giới hạn trong Đạo luật về trách
                    nhiệm giải trình và trách nhiệm bảo hiểm y tế (HIPAA), Đạo
                    luật Gramm-Leach Bliley (GLBA), Bảo vệ quyền riêng tư trực
                    tuyến của trẻ em Đạo luật (COPPA), Đạo luật về quyền riêng
                    tư và quyền riêng tư trong giáo dục gia đình (FERPA) hoặc
                    bất kỳ luật nào liên quan đến quyền riêng tư của bất kỳ
                    thông tin cá nhân nào được thu thập hoặc các luật khác có
                    thể áp dụng cho Bạn và để xác định xem Dịch vụ của chúng tôi
                    có phù hợp để bạn sử dụng trong ánh sáng không của ứng dụng
                    hoặc ứng dụng tiềm năng của bất kỳ luật hoặc quy định như
                    vậy. Nếu Bạn phải tuân theo luật hoặc quy định cụ thể, Bạn
                    tuyên bố và bảo đảm rằng việc bạn sử dụng Dịch vụ của chúng
                    tôi sẽ tuân theo các luật hoặc quy định đó. heatmap sẽ
                    không chịu trách nhiệm về việc Bạn không cung cấp chính sách
                    bảo mật đầy đủ về mặt pháp lý hoặc nếu Dịch vụ của chúng tôi
                    không đáp ứng các yêu cầu được áp đặt bởi bất kỳ luật hoặc
                    quy định về quyền riêng tư nào mà bạn phải tuân theo.
                  </p>
                  <p>
                    10.3. Nếu Bạn ở Khu vực Kinh tế Châu Âu (EEA) hoặc có bất kỳ
                    khách truy cập nào trong EEA, Bạn tuyên bố và bảo đảm rằng
                    Bạn sử dụng Dịch vụ theo GDPR, bao gồm cả Bạn:
                  </p>
                  <ol style={{ listStyleType: "lower-alpha" }}>
                    <li>
                      sẽ mô tả rõ ràng bằng văn bản về cách bạn dự định sử dụng
                      bất kỳ Dữ liệu nào được xử lý, bao gồm cả việc bạn sử dụng
                      Dịch vụ của chúng tôi. Chúng tôi đã phát triển một số từ
                      ngữ mô hình Bạn có thể sử dụng cho việc này (vui lòng tìm
                      lời khuyên từ chính tư vấn của bạn trước khi sử dụng!); đã
                      tuân thủ và sẽ tuân thủ, với tất cả các quy định, cũng như
                      bảo vệ dữ liệu, giao tiếp điện tử và luật riêng tư áp
                      dụng; đã xử lý tất cả Dữ liệu liên quan đến bất kỳ cá nhân
                      nào tuân thủ tất cả các luật và quy định bảo vệ dữ liệu;
                      và
                    </li>
                    <li>
                      Bạn đồng ý bồi thường và giữ cho chúng tôi vô hại khỏi mọi
                      tổn thất, bao gồm cả phí luật sư, do việc
                    </li>
                    <li>
                      bạn vi phạm bất kỳ phần nào trong những bảo đảm này;
                    </li>
                    <li>
                      Bạn cũng đồng ý rằng, nếu áp dụng cho Bạn, Bạn đã ký Thỏa
                      thuận xử lý dữ liệu của chúng tôi.
                    </li>
                  </ol>
                  <p></p>
                  <p>
                    10,4. Bạn đồng ý, liên quan đến việc Bạn sử dụng Dịch vụ, để
                    tuân thủ tất cả các luật và quy định kiểm soát xuất khẩu và
                    tái xuất hiện hành. Bạn đảm bảo rằng bạn không ở trong một
                    quốc gia bị trừng phạt của Hội đồng Bảo an Liên Hợp Quốc và
                    không nằm trong danh sách những người bị xử phạt. Bạn cũng
                    đảm bảo rằng Bạn sẽ không mua Dịch vụ bằng cách sử dụng tiền
                    từ một quốc gia bị trừng phạt
                  </p>
                  <p></p>
                  <h2>11. Hạn chế </h2>
                  11.1. Trong mọi trường hợp, heatmap, chủ sở hữu, nhà cung cấp
                  hoặc bất kỳ chủ sở hữu, giám đốc, nhân viên, nhà thầu và /
                  hoặc đại lý nào của họ phải chịu trách nhiệm với Bạn hoặc bất
                  kỳ Bên thứ ba nào về bất kỳ hậu quả trực tiếp, gián tiếp, đặc
                  biệt, mẫu mực hoặc trừng phạt nào khác thiệt hại (bao gồm
                  nhưng không giới hạn ở bất kỳ lợi nhuận hoặc doanh thu bị mất,
                  gián đoạn, mất chương trình hoặc thông tin khác hoặc bất kỳ
                  tổn thất tiền điện tử nào khác) phát sinh trực tiếp hoặc gián
                  tiếp từ (i) Việc bạn sử dụng hoặc truy cập Trang web và / hoặc
                  Dịch vụ, hoặc bất kỳ nội dung, sản phẩm hoặc dịch vụ nào được
                  phân phối trên hoặc được cung cấp thông qua Trang web và /
                  hoặc Dịch vụ, (ii) cho bất kỳ sự thất bại hoặc gián đoạn nào
                  của Trang web và / hoặc Dịch vụ; cho dù phát sinh do lỗi,
                  thiếu sót, mất dữ liệu, lỗi, vi rút, gián đoạn hoặc chậm trễ
                  trong hoạt động hoặc truyền hoặc bất kỳ nguyên nhân nào khác,
                  cho dù dựa trên bảo hành, hợp đồng, tra tấn (bao gồm cả sơ
                  suất) hoặc bất kỳ lý thuyết pháp lý nào khác, ngay cả khi
                  heatmap hoặc các nhà cung cấp của nó đã được thông báo rõ
                  ràng về khả năng thiệt hại như vậy.
                  <p></p>
                  <p>
                    11.2. Trong mọi trường hợp và không ảnh hưởng đến điều trên,
                    tổng trách nhiệm tổng hợp tối đa của heatmap theo Thỏa
                    thuận này, bao gồm mọi phụ lục theo đây, hoặc liên quan đến
                    việc sử dụng hoặc khai thác bất kỳ phần nào hoặc tất cả
                    Trang web hoặc Dịch vụ, nội dung hoặc tài liệu người dùng
                    trong mọi cách sẽ không vượt quá phí thuê bao hàng tháng của
                    bạn.
                  </p>
                  <p></p>
                  <h2>12. Giữ dữ liệu</h2>
                  12.1. heatmap cam kết lưu trữ dữ liệu một cách an toàn thay
                  mặt cho khách hàng của chúng tôi theo Kế hoạch đăng ký và
                  khung thời gian tương ứng với từng Gói đăng ký. Tất cả dữ liệu
                  vượt quá khung thời gian đã nêu sẽ được xóa thường xuyên và tự
                  động khỏi hệ thống của chúng tôi.
                  <p></p>
                  <p>
                    12.2. Bạn xác nhận và chấp nhận rằng heatmap không cung cấp
                    bất kỳ dịch vụ lưu trữ hoặc sao lưu nào và có thể xóa Dữ
                    liệu không còn được sử dụng và vượt quá các khung thời gian
                    được quy định trong Kế hoạch đăng ký hiện hành. heatmap rõ
                    ràng từ chối mọi nghĩa vụ liên quan đến việc lưu trữ, lưu
                    trữ và sao lưu dữ liệu.
                  </p>
                  <p></p>
                  <h2>13. Giả định rủi ro</h2>
                  13.1. Bạn chỉ sử dụng Internet với rủi ro của riêng bạn và
                  tuân theo tất cả các luật và quy định hiện hành của địa
                  phương, tiểu bang, quốc gia và quốc tế. Mặc dù heatmap đã nỗ
                  lực để tạo ra Trang web và Dịch vụ an toàn và đáng tin cậy,
                  heatmap không chịu trách nhiệm về tính bảo mật của bất kỳ
                  thông tin nào ngoài tầm kiểm soát của mình. heatmap sẽ không
                  chịu trách nhiệm cho các gián đoạn hoặc thiếu sót trong các
                  dịch vụ Internet, mạng hoặc lưu trữ. Bạn chịu rủi ro duy nhất
                  và đầy đủ khi sử dụng Trang web và Dịch vụ.
                  <p></p>
                  <p>
                    13.2. Bạn tuyên bố rằng Bạn biết rằng do tính chất toàn cầu
                    của Internet và World Wide Web, Trang web và / hoặc Dịch vụ
                    có sẵn trực tuyến và thường có thể truy cập từ mọi nơi trên
                    thế giới bất cứ lúc nào. Truy cập vào Trang web và / hoặc
                    Dịch vụ có thể không hợp pháp bởi một số người hoặc trong
                    một số khu vực pháp lý nhất định. Việc truy cập và sử dụng
                    Trang web và / hoặc Dịch vụ là rủi ro của riêng bạn và Bạn
                    phải chịu trách nhiệm tuân thủ luật pháp của khu vực pháp lý
                    của bạn và mọi quyền tài phán mà Bạn sử dụng Trang web và /
                    hoặc Dịch vụ. Bạn đồng ý tuân thủ tất cả các quy tắc địa
                    phương về hành vi trực tuyến và nội dung được chấp nhận
                    trong bất kỳ nội dung được tạo nào.
                  </p>
                  <p></p>
                  <h2>14. Liên kết</h2>
                  14.1. Trang web và / hoặc Dịch vụ có thể bao gồm các liên kết
                  đến một số trang web, tài liệu hoặc nội dung được phát triển
                  bởi Bên thứ ba. heatmap đã không xem xét tất cả các trang web
                  được liên kết đến Trang web và / hoặc Dịch vụ của mình và sẽ
                  không chịu trách nhiệm về nội dung của bất kỳ tài liệu được
                  liên kết nào như vậy. Việc bao gồm bất kỳ liên kết nào không
                  bao hàm sự chứng thực bởi heatmap của tài liệu đó và heatmap
                  sẽ không chịu trách nhiệm đối với bất kỳ liên kết nào có trong
                  đó. Việc sử dụng bất kỳ tài liệu liên kết như vậy sẽ có nguy
                  cơ của riêng bạn. heatmap bảo lưu quyền, theo quyết định
                  riêng và tuyệt đối của mình, ngừng liên kết với bất kỳ tài
                  liệu nào khác bất cứ lúc nào và vì bất kỳ lý do gì.
                  <p></p>
                  <p></p>
                  <h2>15. Quảng cáo</h2>
                  15.1. Trừ khi bạn rút lại một cách cụ thể sự đồng ý của bạn
                  đối với điều khoản này bằng cách gửi email tại
                  Legal@heatmap.com, Bạn thừa nhận và đồng ý với heatmap sử
                  dụng bất kỳ nhãn hiệu, logo và tên thương mại nào của bạn để
                  xác định Bạn là người dùng / khách hàng của heatmap trên
                  Trang web của heatmap và / hoặc Dịch vụ, ngoài bất kỳ tài
                  liệu tiếp thị nào khác.
                  <p></p>
                  <p></p>
                  <h2>16. Thực thi bảo mật </h2>
                  16.1. Việc sử dụng trái phép hoặc cố gắng sử dụng trái phép
                  bất kỳ Trang web và / hoặc Dịch vụ nào có thể dẫn đến việc
                  chúng tôi bị truy tố hình sự và / hoặc truy tố dân sự. Để bảo
                  vệ bạn, Chúng tôi có quyền xem, theo dõi và ghi lại hoạt động
                  trên Trang web và / hoặc Dịch vụ mà không cần thông báo hoặc
                  cho phép thêm từ Bạn, trong phạm vi tối đa được Luật áp dụng
                  cho phép và chỉ tuân theo Thỏa thuận này. Quyền này mở rộng để
                  chúng tôi xem xét hoạt động theo dõi và chi tiết liên quan đến
                  các vi phạm đã khiếu nại của Bạn. Bất kỳ thông tin nào có được
                  bằng cách theo dõi, xem xét hoặc ghi lại đều phải được xem xét
                  bởi các tổ chức thực thi pháp luật liên quan đến việc điều tra
                  hoặc truy tố các hoạt động tội phạm có thể có trên bất kỳ
                  Trang web và / hoặc Dịch vụ nào.
                  <p></p>
                  <p></p>
                  <h2>17. Hiệu lực</h2>
                  17.1. Nếu bất kỳ điều khoản nào của Thỏa thuận này được tìm
                  thấy, bởi bất kỳ tòa án nào có thẩm quyền tài phán, không thể
                  thực thi được, thì điều khoản đó sẽ được giới hạn trong phạm
                  vi tối thiểu cần thiết để Thỏa thuận này có hiệu lực ở mức tối
                  đa có thể.
                  <p></p>
                  <p></p>
                  <h2>18. Bồi thường</h2>
                  18.1. Nghĩa vụ bồi thường của chúng tôi: Chúng tôi đồng ý bồi
                  thường, bảo vệ và giữ Bạn vô hại và chống lại mọi khiếu nại do
                  Bên thứ ba phát sinh từ hoặc liên quan đến vi phạm Quyền sở
                  hữu trí tuệ của bên thứ ba phát sinh trực tiếp từ việc bạn sử
                  dụng Dịch vụ theo quy định của bạn các điều khoản của Thỏa
                  thuận này. Mặc dù đã nói ở trên, chúng tôi sẽ không có nghĩa
                  vụ bồi thường đối với bất kỳ khiếu nại nào (i) phát sinh từ
                  hoặc liên quan đến Dữ liệu của bạn (ii) đối với việc bạn vi
                  phạm bất kỳ Luật áp dụng nào; (iii) Vi phạm của bạn, dù bị cáo
                  buộc hay thực tế, về bất kỳ quyền của Bên thứ ba nào, bao gồm
                  nhưng không giới hạn ở quyền Bảo vệ dữ liệu và quyền riêng tư.
                  <p></p>
                  <p>
                    18.2. Nghĩa vụ bồi thường của bạn: Bạn sẽ bồi thường, giữ vô
                    hại và bảo vệ heatmap, bao gồm bất kỳ công ty con, cán bộ,
                    chủ sở hữu, đối tác, giám đốc, nhân viên, nhà thầu, đại lý,
                    công ty con, cổ đông, nhà cấp phép, nhà cung cấp và các đối
                    tác khác của họ ), ở mức tối đa được phép, đầy đủ và vĩnh
                    viễn và bằng chi phí của bạn, từ bất kỳ trách nhiệm pháp lý,
                    khiếu nại, chi phí, chi phí, nghĩa vụ, tổn thất hoặc thiệt
                    hại nào, ngoại trừ thiệt hại gián tiếp và tổn thất do hậu
                    quả có thể phát sinh từ (i ) Việc bạn sử dụng trái phép bất
                    kỳ tài liệu nào có được thông qua Trang web và Dịch vụ; (ii)
                    Việc bạn sử dụng và truy cập Trang web và Dịch vụ không phù
                    hợp với Thỏa thuận này; và (iv) Vi phạm của bạn, cho dù bị
                    cáo buộc hay thực tế, về bất kỳ quyền của Bên thứ ba nào.
                  </p>
                  <p>
                    18.3. Thủ tục bồi thường: Các nghĩa vụ bồi thường tương ứng
                    của các bên ở trên được quy định dựa trên: (a) các bên được
                    bồi thường đưa ra thông báo bằng văn bản cho bên yêu cầu bồi
                    thường, ngoại trừ việc không cung cấp thông báo kịp thời sẽ
                    chỉ giới hạn nghĩa vụ bồi thường trong phạm vi bồi thường.
                    đảng bị định kiến ​​bởi sự chậm trễ hoặc thất bại; (b) bên
                    bồi thường có toàn quyền và toàn quyền đối với việc bảo vệ
                    và giải quyết khiếu nại; (c) các bên được bồi thường có liên
                    quan cung cấp hỗ trợ liên quan đến việc bảo vệ và giải quyết
                    khiếu nại (miễn là việc giải quyết không bao gồm bất kỳ
                    khoản thanh toán nào bằng hoặc bất kỳ sự thừa nhận trách
                    nhiệm nào, cho dù là dân sự hay hình sự, về phía bất kỳ của
                    các bên được bồi thường), vì bên bồi thường có thể yêu cầu
                    một cách hợp lý; và (d) các bên được bồi thường, tuân thủ
                    bất kỳ thỏa thuận giải quyết hoặc lệnh tòa nào liên quan đến
                    khiếu nại. Bên bồi thường sẽ bồi thường cho các bên được bồi
                    thường chống lại: (i) tất cả các thiệt hại, chi phí và luật
                    sư về phí cuối cùng được trao cho bất kỳ ai trong số họ đối
                    với bất kỳ khiếu nại nào; (ii) tất cả các chi phí tự trả
                    (bao gồm cả phí luật sư hợp lý) do bất kỳ ai trong số họ
                    chịu liên quan đến việc bảo vệ khiếu nại (trừ phí luật sư và
                    chi phí phát sinh mà không có sự đồng ý của bên bồi thường
                    sau khi họ chấp nhận biện hộ của yêu cầu đó); và (iii) tất
                    cả các khoản tiền mà bên bồi thường đã đồng ý thanh toán cho
                    bất kỳ bên thứ ba nào để giải quyết mọi khiếu nại phát sinh
                    theo Khoản này và được giải quyết bởi bên bồi thường hoặc
                    với sự chấp thuận của bên đó.
                  </p>
                  <p>
                    18.4. Biện pháp khắc phục vi phạm: Nếu bạn bị cấm hoặc bị
                    cấm sử dụng bất kỳ Dịch vụ nào hoặc một phần trong số đó dựa
                    trên khiếu nại vi phạm Sở hữu trí tuệ của bên thứ ba được
                    bảo vệ theo nghĩa vụ bồi thường của chúng tôi theo Điều
                    khoản trên, thì chúng tôi sẽ, với chi phí và tùy chọn duy
                    nhất của chúng tôi, hoặc: (a) có được cho Bạn quyền sử dụng
                    các phần được cho là vi phạm của Dịch vụ; (b) sửa đổi các
                    phần được cho là vi phạm của Dịch vụ để khiến chúng không vi
                    phạm mà không làm giảm đáng kể hoặc làm suy giảm chức năng
                    của chúng; hoặc (c) thay thế các phần bị cáo buộc vi phạm
                    của Dịch vụ bằng các mục không vi phạm có chức năng tương
                    tự. Nếu chúng tôi xác định rằng các biện pháp đã nêu ở trên
                    không hợp lý về mặt thương mại, thì chúng tôi sẽ nhanh chóng
                    cung cấp khoản hoàn trả theo tỷ lệ cho Bạn cho bất kỳ khoản
                    phí trả trước nào mà chúng tôi nhận được theo Thỏa thuận này
                    tương ứng với phần chưa sử dụng của Điều khoản. Biện pháp
                    khắc phục được nêu trong Điều khoản này là Biện pháp khắc
                    phục duy nhất và duy nhất của bạn đối với bất kỳ hành vi vi
                    phạm thực tế hoặc bị cáo buộc nào của chúng tôi đối với bất
                    kỳ Quyền sở hữu trí tuệ của bên thứ ba nào trong trường hợp
                    Bạn bị cấm hoặc sử dụng bất kỳ Dịch vụ nào hoặc một phần nào
                    đó dựa trên một yêu cầu được bảo vệ bởi các nghĩa vụ bồi
                    thường của chúng tôi theo Khoản này.
                  </p>
                  <p>
                    18,5. Bạn phải hoàn toàn chịu trách nhiệm trong việc bảo vệ
                    bất kỳ khiếu nại nào như vậy và đối với việc thanh toán các
                    tổn thất, chi phí, thiệt hại hoặc chi phí phát sinh từ cả
                    bên thứ ba và heatmap liên quan. Bạn sẽ không, nếu không có
                    sự chấp thuận trước bằng văn bản của heatmap, cố gắng, hoặc
                    giải quyết, xử lý hoặc tham gia vào bất kỳ giải quyết hoặc
                    giải quyết đề xuất nào của bất kỳ khiếu nại nào (cho dù cuối
                    cùng đã được xét xử hay nói cách khác) đối với Bạn, nếu kết
                    quả giải quyết hoặc giải quyết đó trong bất kỳ nghĩa vụ hoặc
                    trách nhiệm đối với heatmap. Với điều kiện là điều khoản
                    này sẽ tồn tại khi chấm dứt Thỏa thuận này, h
                  </p>
                  <p></p>
                  <h2>19. Luật điều chỉnh và giải quyết tranh chấp </h2>
                  19.1. Thỏa thuận này được điều chỉnh bởi, và được hiểu theo
                  luật pháp của Việt Nam. Các bên đồng ý rằng mọi tranh chấp
                  hoặc khiếu nại phát sinh từ hoặc liên quan đến Thỏa thuận này
                  hoặc đối tượng của nó, sẽ phải chịu sự phán quyết độc quyền
                  của Trung tâm Trọng tài Việt Nam theo Đạo luật Trọng tài (Điều
                  387 của Luật pháp Việt Nam ) và các quy tắc trọng tài của
                  Trung tâm Trọng tài Việt Nam có hiệu lực tại thời điểm tranh
                  chấp. heatmap sẽ giữ quyền, theo lựa chọn của mình và vì lợi
                  ích riêng của mình, để khởi kiện hoặc liên quan đến việc bạn
                  sử dụng Trang web và Dịch vụ tại Tòa án của quốc gia nơi bạn
                  cư trú.
                  <p></p>
                  <p></p>
                  <h2>20. Miễn trừ của Hội đồng xét xử </h2>
                  20.1. Bạn và heatmap từ bỏ các quyền của họ (nếu có thể) cho
                  một phiên tòa bởi bồi thẩm đoàn liên quan đến tất cả các khiếu
                  nại và nguyên nhân hành động (bao gồm cả yêu cầu phản tố) liên
                  quan đến hoặc phát sinh từ Thỏa thuận này. Việc từ bỏ này cũng
                  sẽ được áp dụng cho mọi sửa đổi hoặc sửa đổi tiếp theo đối với
                  Thỏa thuận này.
                  <p></p>
                  <p></p>
                  <h2>21. Không có hoạt động lớp</h2>
                  21.1. Tất cả các khiếu nại giữa các bên, bao gồm các công ty
                  mẹ và các công ty con được đề cập trong các điều 2.5 và 2.6 ở
                  trên, liên quan đến Thỏa thuận này sẽ được khởi kiện riêng lẻ
                  và Bạn sẽ không hợp nhất hoặc tìm cách đối xử với bất kỳ khiếu
                  nại nào đối với Dịch vụ.
                  <p></p>
                  <p></p>
                  <h2> 22. Miễn trừ tuân thủ Thỏa thuận này </h2>
                  22.1. Bất cứ lúc nào, chúng tôi không thi hành bất kỳ điều
                  khoản, điều kiện hoặc yêu cầu nào của Thỏa thuận hoặc không
                  yêu cầu, bất kỳ lúc nào, bạn thực hiện bất kỳ điều khoản nào
                  của Thỏa thuận, sẽ không từ bỏ nghĩa vụ của bạn tuân thủ bất
                  kỳ điều khoản nào của Thỏa thuận hoặc khả năng của chúng tôi
                  để thực thi từng điều khoản như văn bản.
                  <p></p>
                  <p>
                    22.2. Bất kỳ và tất cả các miễn trừ của một trong hai bên
                    theo bất kỳ điều khoản, điều kiện hoặc yêu cầu nào của Thỏa
                    thuận sẽ chỉ có hiệu lực đối với Bên kia nếu nó được viết và
                    ký bởi một nhân viên có thẩm quyền của Bên đó, và bất kỳ sự
                    từ bỏ bằng văn bản nào đó sẽ không cấu thành từ bỏ bất kỳ
                    nghĩa vụ trong tương lai để tuân thủ quy định, điều kiện
                    hoặc yêu cầu đó.
                  </p>
                  <p></p>
                  <h2> 23. Phân công và ủy quyền </h2>
                  23.1. Không Bên nào có thể chuyển nhượng hoặc ủy quyền bất kỳ
                  quyền hoặc nghĩa vụ nào theo Thỏa thuận mà không có sự đồng ý
                  trước bằng văn bản của bên kia. Mặc dù đã nói ở trên, cả hai
                  bên có thể chuyển nhượng quyền và nghĩa vụ của mình theo Thỏa
                  thuận liên quan đến hợp nhất, sáp nhập, mua lại hoặc bán đáng
                  kể tất cả tài sản, cổ phần hoặc hoạt động của họ mà không cần
                  sự đồng ý trước bằng văn bản của bên kia.
                  <p></p>
                  <p></p>
                  <h2> 24. Mối quan hệ của các bên </h2>
                  24.1. Theo các điều khoản trái ngược trong tài liệu này, không
                  có điều khoản nào trong các Điều khoản này sẽ được giải thích
                  hoặc hiểu để tạo ra một quan hệ đối tác, đại lý, một chủ lao
                  động, chủ lao động chung hoặc bất kỳ loại quan hệ lao động nào
                  khác giữa các bên theo đây hoặc để áp đặt trách nhiệm pháp lý
                  cho mối quan hệ đó khi một trong hai bên. Cả hai bên sẽ không
                  có quyền, quyền hạn hoặc quyền hạn để tham gia vào bất kỳ thỏa
                  thuận nào thay mặt, để chịu bất kỳ nghĩa vụ hoặc trách nhiệm
                  pháp lý nào, hoặc ràng buộc bên kia.
                  <p></p>
                  <p></p>
                  <h2> 25. Hết hạn </h2>
                  25.1. Các quyền và nghĩa vụ theo Thỏa thuận này mà theo bản
                  chất của chúng là nhằm tồn tại chấm dứt, bao gồm nhưng không
                  giới hạn các điều khoản giới hạn bồi thường và trách nhiệm
                  pháp lý được quy định trong Thỏa thuận này, sẽ vẫn có hiệu lực
                  sau khi chấm dứt hoặc hết hạn Thỏa thuận.
                  <p></p>
                  <p></p>
                  <h2>26. Bảo mật / Bảo vệ dữ liệu </h2>
                  26.1. Vui lòng tham khảo Chính sách quyền riêng tư của chúng
                  tôi để biết chi tiết về thực tiễn bảo mật của chúng tôi đối
                  với dịch vụ heatmap. Bạn thừa nhận rằng, bằng cách sử dụng
                  Dịch vụ của chúng tôi, Bạn có thể xử lý thông tin được coi là
                  Dữ liệu Cá nhân và / hoặc Thông tin Dữ liệu Cá nhân được coi
                  là nhạy cảm theo luật áp dụng cho Bạn. Bạn thừa nhận rằng Bạn
                  phải chịu trách nhiệm duy nhất và duy nhất thực hiện tất cả
                  các biện pháp cần thiết trên trang web / ứng dụng của bạn và
                  để có được bất kỳ sự đồng ý nào mà Bạn có nghĩa vụ pháp lý
                  phải có được từ người dùng / khách hàng của bạn.
                  <p></p>
                  <p>
                    26.2. Bằng cách chấp nhận các điều khoản trong Thỏa thuận
                    này, bao gồm cả các phụ lục của nó, Bạn thừa nhận đại diện
                    và bảo đảm rằng Bạn sẽ tuân thủ tất cả các luật hiện hành,
                    bao gồm nhưng không giới hạn đối với luật bảo vệ dữ liệu và
                    quyền riêng tư và Bạn sẽ bồi thường cho các bên Bồi thường
                    đối với bất kỳ khiếu nại nào của bên thứ ba liên quan đến vi
                    phạm luật áp dụng đó trong việc sử dụng Dịch vụ.
                  </p>
                  <p>
                    26.3. Chính sách bảo mật trên trang web / ứng dụng của bạn:
                    Chúng tôi sẽ không chịu trách nhiệm hoặc chịu trách nhiệm về
                    việc bạn không cung cấp chính sách bảo mật đầy đủ về mặt
                    pháp lý tiết lộ việc bạn sử dụng Dịch vụ của chúng tôi. Việc
                    không thực hiện chính sách bảo mật tuân thủ luật bảo vệ dữ
                    liệu hiện hành trên trang web / ứng dụng của bạn có thể dẫn
                    đến việc chấm dứt Tài khoản của bạn.
                  </p>
                  <p></p>
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
