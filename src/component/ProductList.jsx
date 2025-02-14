import React from "react";
import './css/main.css';
import { Link } from 'react-router-dom';

function ProductList() {
    const products  = [  
            {
              id: "1",
              name: `"
              Dưới bóng cây xanh trong khu rừng rậm, có một chú khỉ tên là Bibo, người nổi tiếng với khả năng biến hóa vai độc đáo của mình. Bibo có một trái tim ấm áp và luôn tràn đầy tình yêu thương. Một ngày nọ, khi Bibo đang lang thang qua khu rừng, anh bắt gặp một cô nàng xinh đẹp tên là Luna.
              
              Luna là một cô nàng tinh khôi với mái tóc vàng nhẹ, đôi mắt như ngọc bích và nụ cười tươi sáng. Bibo ngay lập tức bị quyến rũ bởi vẻ đẹp trong trắng và tình cảm ấm áp của Luna. Từ đó, Bibo quyết định sử dụng khả năng biến hóa của mình để có cơ hội gặp gỡ và gần gũi với Luna.
              
              Mỗi ngày, Bibo biến hình thành những hình dạng độc đáo để gặp gỡ Luna và tạo ra những trải nghiệm thú vị cho cả hai. Một ngày, anh có thể biến thành chú chim hồng hạc để hòa mình vào bức tranh tĩnh lặng mà Luna đang vẽ. Ngày khác, Bibo lại biến thành bông hoa hồng đỏ thắm, tặng Luna trong ánh hoàng hôn lung linh.
              
              Luna, không biết đến bí mật của Bibo, bắt đầu cảm nhận được sự xuất hiện của một người đặc biệt trong cuộc sống của mình. Cô cảm nhận được sự ấm áp, hạnh phúc và niềm vui mỗi khi ở bên chú khỉ biến hình.
              
              Dần dần, Bibo và Luna trở nên thân thiết và chia sẻ những khoảnh khắc đẹp bên nhau. Mỗi lần Bibo biến hình, là một cơ hội để họ hiểu rõ hơn về nhau và tăng cường tình yêu thương. Cho đến một ngày, khi Bibo quyết định bộc lộ bí mật của mình.
              
              Tuy nhiên, thay vì ngạc nhiên, Luna chỉ cười và nói: "Anh không cần phải biến hình để chứng minh tình yêu của mình. Đối với em, anh là chính mình là đủ." Và từ đó, Bibo không còn cần phải biến hình nữa, vì tình yêu thương chân thành và sự chấp nhận từ Luna đã làm cho anh hiểu rằng sự đẹp đẽ thực sự đến từ bên trong. Bibo và Luna sống hạnh phúc bên nhau, chia sẻ tình yêu và những khoảnh khắc đáng nhớ trong khu rừng rậm tươi tốt."`,
              image:"",
              brand: "halihair",
              material: "100% tóc việt Nam",
              length: "8''->32''",
              makeStyle: "straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm",
              color: "màu sắc làm theo yêu cầu của khách hàng",
              expiry: "từ 1 năm trở lên , với chăm sóc tốt"
            },
            {
              id: "2",
              name: `"Dưới bóng cây rợp bóng, Bibo và Luna sống hạnh phúc bên nhau. Họ chia sẻ những niềm vui, nỗi buồn và những khám phá mới trong thế giới kỳ diệu của khu rừng. Bibo không còn biến hình như trước nữa, nhưng khả năng đặc biệt của anh vẫn làm cho cuộc sống của họ trở nên phong phú và thú vị.

              Mỗi buổi hoàng hôn, Bibo và Luna ngồi bên nhau trên một đỉnh đồi, nhìn ngắm những tia nắng vàng óng ả của bình minh. Bibo thường bật mí về những chuyến phiêu lưu của mình khi biến hình, và Luna luôn lắng nghe mỗi câu chuyện như là một mảnh ghép quan trọng của tình yêu của họ.
              
              Một ngày, khi mặt trời nhấp nhô qua đỉnh núi cao, Bibo và Luna quyết định tổ chức một bữa tiệc nhỏ để kỷ niệm thời gian họ đã dành bên nhau. Bibo biến thành đầu bếp tài năng, và Luna làm những chiếc bánh ngọt tuyệt vời nhất từ trái cây mà khu rừng cung cấp.
              
              Trong lúc bữa tiệc diễn ra, Bibo đột nhiên nảy lên và đưa cho Luna một hộp quà nhỏ. Khi cô mở ra, bên trong là một chiếc vòng cầu vồng rực rỡ, được làm từ những viên ngọc phát sáng. "Đây là biểu tượng của tình yêu không điều kiện và sự đa dạng," Bibo nói, "nó giống như chúng ta, mỗi viên ngọc là một đặc điểm riêng biệt và quan trọng của chúng ta."
              
              Luna ôm chặt Bibo và nói, "Anh là nguồn động viên lớn nhất của em. Bằng cách nào đi chăng nữa, em chỉ muốn ở bên cạnh anh và xây dựng những kí ức đẹp nhất cùng anh." Bibo và Luna hứa sẽ bên nhau trọn đời, giữ cho tình yêu của họ luôn như một bức tranh nghệ thuật đẹp đẽ, tràn đầy màu sắc và hạnh phúc."`,
              image:"https://res-console.cloudinary.com/dvyd883cl/thumbnails/v1/image/upload/v1702909002/bmR0X2J4ZjdkdA==/grid_landscape",
              brand: "halihair",
              material: "100% tóc việt Nam",
              length: "8''->32''",
              makeStyle: "straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm",
              color: "màu sắc làm theo yêu cầu của khách hàng",
              expiry: "từ 1 năm trở lên , với chăm sóc tốt"
            },
            {
              id: "3",
              name: `"Một ngày trôi qua, Bibo và Luna dạo chơi bên bờ suối trong khu rừng. Tiếng rì rào của nước chảy và hương hoa quýt lan tỏa khắp nơi, tạo nên một bức tranh tuyệt vời của tình yêu và sự yên bình. Bibo nhìn sâu vào đôi mắt của Luna và nói:

              "Bibo đã từng là một chú khỉ có khả năng biến hình, nhưng bởi vì tình yêu của Luna, anh không còn cần phải làm điều đó nữa. Em là người đã làm cho trái tim anh biến đổi, nhưng giữ nguyên vẻ đẹp tự nhiên của nó."
              
              Luna mỉm cười và nói, "Anh không chỉ biến hình bề ngoài, mà còn biến đổi tâm hồn em. Anh là người đã làm cho thế giới xung quanh em trở nên kỳ diệu hơn, và em biết ơn điều đó mỗi ngày."
              
              Bibo nhẹ nhàng ôm Luna và thêm, "Chúng ta đã xây dựng một thế giới của chúng ta, nơi tình yêu và sự hiểu biết thắp sáng mọi góc khuất. Cùng nhau, chúng ta làm cho cuộc sống trở nên phong phú hơn."
              
              Luna nhìn vào mắt Bibo và nói, "Và em biết rằng, dù thế giới xung quanh có thay đổi nhưng tình yêu của chúng ta sẽ luôn mãi mãi như là một bản hòa nhạc tuyệt vời, âm nhạc của trái tim chúng ta hòa quyện với nhau."
              
              Chúng ta hãy tiếp tục theo dõi hành trình của Bibo và Luna trong thế giới kỳ diệu của họ, nơi mọi biến hình của cuộc sống trở nên có ý nghĩa với tình yêu và sự đồng điệu.  "`,
              image: "https://res-console.cloudinary.com/dvyd883cl/thumbnails/v1/image/upload/v1702909003/dGhhbmcxX3Z3ZGFjMA==/grid_landscape",
              brand: "halihair",
              material: "100% tóc việt Nam",
              length: "8''->32''",
              color: "màu sắc làm theo yêu cầu của khách hàng",
              expiry: "từ 1 năm trở lên , với chăm sóc tốt"
            },
            {
              id: "4",
              name: `"Một ngày, khi bước chân của Bibo và Luna đưa họ đến một hồ nước tuyệt vời, họ phát hiện ra một khu vườn kỳ lạ ẩn sau những bức cây màu xanh tươi. Khu vườn đầy ắp những loài hoa lạ mắt và động vật kỳ bí, nơi mà ánh sáng mặt trời bình minh làm cho mọi thứ trở nên phép thuật.

              Bibo và Luna bắt đầu khám phá khu vườn này cùng nhau. Họ gặp gỡ những sinh linh kỳ diệu, từ những chú bướm màu hồng tinh khôi đến những con chim hát ca vô cùng du dương. Mỗi bước đi là một cuộc phiêu lưu mới, làm cho tình yêu của Bibo và Luna trở nên mạnh mẽ hơn từng ngày.
              
              Trong chuyến hành trình này, Bibo và Luna gặp một người phù thủy già tên là Elara, người giữ chìa khóa của một cổng bí mật dẫn đến một thế giới khác. Elara nói với họ về một nhiệm vụ quan trọng có thể thay đổi số phận của cả khu rừng và khu vườn kỳ diệu này.
              
              Bibo và Luna quyết định đối mặt với thách thức và hoàn thành nhiệm vụ. Trải qua những khó khăn, họ hiểu rằng tình yêu không chỉ là về việc chăm sóc cho nhau mà còn về việc chia sẻ, hi sinh, và hỗ trợ trong những thời điểm khó khăn. Họ đã học được rằng mọi thử thách đều là một cơ hội để họ cùng nhau trưởng thành và củng cố tình yêu của mình.
              
              Cuối cùng, khi Bibo và Luna trở về với khu rừng quen thuộc, họ mang theo những bài học và kí ức đẹp từ thế giới kỳ diệu. Cuộc sống của họ vẫn tiếp tục, nhưng tình yêu của họ giờ đây đã trở thành nguồn động viên, sức mạnh và định hình cuộc sống của họ, làm cho mỗi khoảnh khắc trở nên quý giá hơn bao giờ hết.
              "`,
              image:"https://res-console.cloudinary.com/dvyd883cl/thumbnails/v1/image/upload/v1702909000/R2nDs19qbm9lc24=/grid_landscape",
              brand: "halihair",
              material: "100% tóc việt Nam",
              length: "8''->32''",
              makeStyle: "straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm",
              color: "màu sắc làm theo yêu cầu của khách hàng",
              expiry: "từ 1 năm trở lên , với chăm sóc tốt"
            },
            {
              id: "5",
              name: `"Một đêm, khi trăng lên trên bầu trời và ánh sáng nến lung linh trong lánh đèn dầu, Bibo và Luna bắt đầu nghe thấy tiếng những bước chân nhẹ nhàng trên lối đi đá nhỏ. Họ ngạc nhiên khi thấy một hình bóng bí ẩn xuất hiện từ bóng tối, là một chú khỉ khác tên là Zephyr, có bộ lông màu bạch kim và đôi mắt to tròn nhưng vẫn giữ vẻ quyến rũ.

              Zephyr tiết lộ rằng anh ta đến từ một thế giới khác, một nơi còn kỳ diệu hơn nhiều. Anh ta mang theo thông điệp về một thử thách lớn đang đợi Bibo và Luna - một nhiệm vụ để cứu rỗi một khu rừng khác đang đối mặt với nguy cơ mất cân bằc giữa thiên nhiên và tà ác.
              
              Bibo, Luna và Zephyr bắt đầu hành trình mới, đi qua những vùng đất kỳ bí và đầy thử thách. Họ phải đối mặt với những thử thách phép thuật, vượt qua rừng sâu đầy rủi ro và chiến đấu với những thế lực tà ác đang đe dọa sự cân bằc tự nhiên.
              
              Trong hành trình, Bibo và Luna nhận ra rằng tình yêu của họ không chỉ là nguồn động viên cho cuộc sống của họ mà còn có sức mạnh lớn để thay đổi thế giới xung quanh. Họ học được cách kết hợp sức mạnh của tình yêu, sự đa dạng và hiểu biết để đối mặt với mọi khó khăn.
              
              Cuối cùng, khi họ đến được đỉnh núi cao nhất, nơi có cánh cổng kết nối giữa hai thế giới, Bibo, Luna và Zephyr hợp tác để mở ra một lối đi mới, nơi ánh sáng của tình yêu và sự hiểu biết có thể lan tỏa rộng lớn, làm thay đổi không chỉ khu rừng của họ mà còn cả thế giới xung quanh.
              
              Khi mọi thứ quay trở về bình yên, Bibo và Luna nhìn nhau với niềm vui và hạnh phúc. Họ đã vượt qua những thử thách, tạo ra một câu chuyện đầy kỳ tích và để lại dấu ấn tốt đẹp cho thế giới mà họ yêu quý. Bibo, Luna, và Zephyr tiếp tục du ngoạn trong thế giới rộng lớn của tình yêu và khám phá, mang theo với mình hy vọng và sức mạnh của tình người."`,
              image:"https://res-console.cloudinary.com/dvyd883cl/thumbnails/v1/image/upload/v1702909003/aGluaC1uZW4tYW5pbWUtYm95LWRlcC10cmFpLXNvYWktY2EtbmdhdS00NTB4NjAwX2xxODh4dg==/as_is",
              brand: "halihair",
              material: "100% tóc việt Nam",
              length: "8''->32''",
              makeStyle: "straight, body wave, deep wave, loose wave, ocean wave, spanish curl , water wave, deep wave, natural wave,..nếu có kiểu khác khách hàng có thể gửi hình cho chúng tôi làm",
              color: "màu sắc làm theo yêu cầu của khách hàng",
              expiry: "từ 1 năm trở lên , với chăm sóc tốt"
            },
            {
              id: "6",
              name: `"Sau khi họ quay về khu rừng, Bibo và Luna cảm thấy trái tim mình đang tràn ngập niềm hạnh phúc. Khu rừng trở nên tươi mới hơn bao giờ hết, với mỗi cây cỏ và loài động vật như là những bức tranh sống động trong thế giới kỳ diệu của họ. Ánh sáng mặt trời mở ra từng góc khuất, chói lọi qua làn tóc vàng mềm mại của Luna.

              Mọi người trong khu rừng biết đến chuyện phiêu lưu kỳ diệu của Bibo, Luna và Zephyr. Họ trở thành nguồn cảm hứng cho tất cả, chứng minh rằng tình yêu có thể thay đổi thế giới và đánh bại mọi khó khăn. Mỗi loài động vật và mọi cây cỏ đều nhìn nhận sự kết hợp của tình yêu và sức mạnh.
              
              Bibo và Luna, bây giờ là những bảo vật quý giá của khu rừng, trở thành những người lãnh đạo tự nhiên, giúp mọi sinh linh tìm ra sứ mệnh của mình và sống hòa mình với tự nhiên. Họ dành những ngày hạnh phúc bên nhau, chia sẻ những bí mật nhỏ nhất và kỷ niệm đáng nhớ.
              
              Cùng nhau, Bibo và Luna xây dựng một ngôi nhà nhỏ dưới bóng cây xanh, nơi mà tình yêu của họ mãi mãi được kể lại qua thế hệ. Cùng với nhau, họ nuôi dưỡng những hạt giống của tình yêu và hi vọng, để chúng có thể mọc lớn và lan tỏa hạnh phúc đến mọi nơi.
              
              Khu rừng và khu vườn kỳ diệu giờ đây đều được bảo vệ bởi sức mạnh của tình yêu và sự đồng lòng của mọi sinh linh. Bibo, Luna, và Zephyr cùng nhau làm nên một câu chuyện kỳ diệu, chứa đựng thông điệp về tình yêu, sự hiểu biết và sức mạnh của tình người. Kết thúc câu chuyện, một lá cờ màu đa sắc hiện hình, là biểu tượng của sự đoàn kết và đa dạng, đưa chúng ta đến một thế giới tươi mới, nơi mà mọi điều là có thể nếu chúng ta giữ vững tình yêu và lòng tin trong trái tim mình."`,
            },
            {
              id:"7",
              name: `Một buổi tối, dưới bóng cây cổ thụ, Bibo và Luna tổ chức một buổi tiệc nhỏ để tưởng nhớ những chuyến phiêu lưu kỳ diệu của họ. Đám đông đủ đủ loài động vật, từ chú chuột nhỏ tới chú voi khổng lồ, tất cả đã tập trung để chia sẻ niềm vui và hạnh phúc cùng nhau.

              Bibo, với đôi mắt nhíu lại, nói, "Chúng ta đã trải qua nhiều, từ những bí mật kỳ bí tới những thách thức lớn lao. Nhưng mỗi khoảnh khắc đều đáng nhớ vì chúng ta luôn bên nhau."
              
              Luna, cầm tay Bibo, cười hạnh phúc và nói, "Chúng ta không chỉ là một cặp đôi, mà là một gia đình lớn. Mọi người ở đây đều là phần của cuộc phiêu lưu của chúng ta, và chúng ta đã chứng minh rằng tình yêu có thể làm thay đổi cả thế giới."
              
              Zephyr, đứng gần, thêm vào, "Và bây giờ, chúng ta đã tạo ra một cộng đồng đa dạng và hòa thuận. Mỗi sinh linh, từ chú chim cao cổ đến chú sóc nhỏ bé, đều đóng góp vào sự đồng lòng và hạnh phúc của chúng ta."
              
              Cuộc tiệc diễn ra trong không khí tràn đầy niềm vui và hạnh phúc. Những cây đèn lồng màu sắc treo lủng lẳng giữa cây cỏ, và âm nhạc êm dịu bắt đầu phát ra, kêu gọi mọi người đến nhau để nhảy múa và hòa mình vào không khí lễ hội.
              
              Bibo, Luna, và Zephyr đứng bên nhau, nhìn nhau với ánh sáng trăng bên trên, và cùng nhau hòa mình vào vũ điệu của cuộc sống. Họ biết rằng, dù thế giới có thay đổi nhưng tình yêu và hạnh phúc sẽ luôn là nguồn động viên mạnh mẽ cho cuộc sống.
              
              Cuối cùng, mọi người ôm nhau, trao đổi lời chúc mừng và tận hưởng khoảnh khắc hạnh phúc. Bibo và Luna nhìn nhau với đôi mắt tràn đầy tình yêu và biết ơn vì họ đã có nhau và xây dựng nên một thế giới đẹp đẽ, nơi tình yêu và hạnh phúc luôn tràn ngập.`,
            },
            {
              id:"8",
              name: `"Cuộc tiệc đêm đã dần trôi qua, và Bibo, Luna cùng Zephyr vẫn tiếp tục tận hưởng những giây phút cuối cùng của buổi lễ. Dưới ánh trăng, họ quyết định dành một khoảnh khắc tận hưởng sự yên bình của khu rừng và chia sẻ những suy nghĩ và ước mơ của họ.

              Bibo, nhìn lên bầu trời đầy sao, mỉm cười và nói, "Chúng ta đã có những chuyến phiêu lưu tuyệt vời và đã xây dựng lên một gia đình đặc biệt. Nhưng có lẽ, điều quan trọng nhất là chúng ta đã tạo ra những kí ức vui vẻ và hạnh phúc."
              
              Luna, ôm chặt Bibo, nói, "Tình yêu là nguồn động viên lớn nhất, và chúng ta đã chứng minh điều đó. Từ giây phút chúng ta gặp nhau, cuộc sống trở nên tươi sáng hơn, và tình yêu của chúng ta giống như một nguồn sáng, chiếu rọi mọi ngóc ngách của khu rừng."
              
              Zephyr, bay nhẹ trên đỉnh cây, thêm vào, "Chúng ta đã làm được rất nhiều, và tôi tin rằng sự tình nguyện và lòng nhân ái của chúng ta sẽ tiếp tục lan tỏa rộng lớn. Hãy giữ vững tình yêu và hãy làm cho thế giới trở nên tốt đẹp hơn từng ngày."
              
              Nhìn nhau với ánh mắt trìu mến, Bibo và Luna bắt đầu nhảy múa dưới ánh trăng. Cùng với những nhạc điệu nhẹ nhàng, họ hòa mình vào vũ điệu của tình yêu và hạnh phúc. Đôi tay của họ liên kết chặt, biểu tượng cho sự đồng lòng và tình thân.
              
              Cuối cùng, Zephyr hạ cánh, và tất cả cùng nhau tạo nên một vòng tròn, bao quanh cây cổ thụ lớn. Bibo, Luna, Zephyr, và những sinh linh khác, họ chia sẻ lời cảm ơn và lời chúc phúc, hứa rằng tình yêu của họ sẽ luôn là nguồn động viên không ngừng cho mọi người.
              
              Và dưới bóng trăng tròn, khu rừng kỳ diệu bước vào giấc ngủ yên bình, nơi tình yêu và hạnh phúc là nguồn năng lượng bất tận. Bibo và Luna, cùng với đồng bọn, giữ tay nhau, nhẹ nhàng chìm vào giấc ngủ, để những giấc mơ kỳ diệu và hạnh phúc tiếp tục xây dựng trong trái tim mỗi sinh linh."`,
            },
            {
              id: "9",
              name: `"Mặt trời bắt đầu ló rạng, và khu rừng tỉnh dậy dưới ánh sáng vàng ấm áp. Bibo, Luna, và Zephyr tụ tập dưới tán cây cổ thụ, nơi ánh sáng rơi xuống như những viên ngọc màu. Mọi sinh linh, từ nhỏ bé đến lớn lao, hòa mình vào không khí hạnh phúc của một ngày mới.

              Bibo, cầm tay Luna, nói với vẻ hồ hởi, "Hôm nay là một ngày đặc biệt, chúng ta sẽ tiếp tục chuyến phiêu lưu mới. Nhưng lần này, không có thách thức nào, chỉ là những niềm vui và bất ngờ."
              
              Luna, đưa ánh mắt về đám đông vui tươi, thêm vào, "Chúng ta sẽ tạo ra những khoảnh khắc đẹp, đong đầy niềm vui và tình thân. Mỗi người trong khu rừng đều là một phần của gia đình của chúng ta, và hãy để tình yêu lan tỏa rộng lớn như những tia nắng mặt trời."
              
              Zephyr, cười nhẹ, nói, "Hãy để những nụ cười và âm nhạc làm cho ngày hôm nay trở nên đặc biệt. Cuộc sống là một bản nhạc tuyệt vời, và chúng ta là những nhạc sĩ tạo ra nó."
              
              Với đám đông đang tràn đầy năng lượng tích cực, Bibo, Luna, và Zephyr dẫn đầu một cuộc diễu hành vui vẻ qua khu rừng. Đám đông tiếp theo theo sau, mỗi sinh linh cùng nhau hát hò và nhảy múa, tạo nên một không khí lễ hội rộn ràng.
              
              Cuộc phiêu lưu mới bắt đầu, nhưng lần này là một hành trình đầy niềm vui và hạnh phúc. Bibo, Luna, và Zephyr, cùng với gia đình rừng, hòa mình vào vũ điệu của cuộc sống, với hy vọng và niềm tin rằng mỗi ngày mới là một cơ hội để tạo ra những kỷ niệm đáng nhớ.
              
              Và dưới ánh nắng tươi mới của ngày, khu rừng kỳ diệu tiếp tục sống, tràn ngập niềm vui, sự yêu thương và hạnh phúc. Bibo, Luna, và Zephyr cười vang, mở rộng đôi cánh của trí tưởng tượng và sự hi vọng, để chúng bay cao và lan tỏa rộng lớn, làm đẹp thêm mỗi ngóc ngách của thế giới này."`
            },
            {
              id: "10",
              name: `"Khi bình minh len lỏi qua rặng cây, Bibo, Luna, và Zephyr nở một nụ cười hạnh phúc trên khuôn mặt của mình. Họ dừng lại trước một ngôi đền cổ xưa mà họ chưa từng thăm. Đám đông sinh linh rừng, từ chú voi đến chú hổ, đều đã sắp xếp thành hàng ngang để chào đón họ.

              Bibo nhìn quanh và nói, "Trông đẹp quá! Đây chắc chắn là một điểm đến mới thú vị cho chúng ta khám phá."
              
              Luna nhấc đầu, đôi mắt nhấp nhô lên, "Và có vẻ như có một cuộc lễ hội đang chờ đợi chúng ta. Hãy tham gia vào, để tất cả chúng ta đều có thể tận hưởng những giây phút vui vẻ cùng nhau."
              
              Zephyr, đưa tay vào không khí, thêm vào, "Mỗi ngày là một cơ hội mới để tạo ra những ký ức đẹp đẽ. Chúng ta hãy cùng hòa mình vào những điệu nhảy, âm nhạc, và nụ cười, để tình yêu và hạnh phúc lan tỏa rộng lớn hơn."
              
              Cuộc lễ hội bắt đầu, âm nhạc sôi động, những đóa hoa màu sắc và ánh đèn lấp lánh trang trí xung quanh. Đám đông sinh linh cùng hòa mình vào không khí lễ hội, nhảy múa và cười đùa, tạo nên một cuộc vui vẻ không ngừng.
              
              Bibo, Luna, và Zephyr, cùng với gia đình rừng, nhảy múa vui vẻ dưới bầu trời xanh, tận hưởng những phút giây tuyệt vời của cuộc sống. Dưới tia nắng ấm áp, họ cảm nhận sự đoàn kết và hạnh phúc, biểu tượng cho một cuộc sống tràn ngập niềm vui và tình yêu.
              
              Và khi mặt trời lặn, đèn lồng bắt đầu tỏa sáng, đánh dấu cho một kết thúc hoàn hảo của một ngày đặc biệt. Bibo, Luna, và Zephyr, cùng với tất cả mọi người, nhìn nhau với niềm hạnh phúc tràn ngập trái tim, chắc chắn rằng mỗi khoảnh khắc của cuộc sống này đều đáng giá sống và trân trọng.
              
              Và với những câu chuyện, nụ cười, và ký ức tốt đẹp, họ tiếp tục hành trình của mình, đưa theo mình tất cả những điều tốt đẹp nhất từ cuộc phiêu lưu kỳ diệu của họ."`,
            },
            
            {id: "11",
            name: `"Ngày mới bắt đầu, Bibo, Luna, và Zephyr quyết định khám phá một khu rừng mới, nơi mà bản thân chúng ta là người đang khám phá. Cùng với đám đông sinh linh, họ bắt đầu cuộc hành trình mới, đi qua những cánh rừng mênh mông và thách thức mới.

            Bibo nhìn quanh với ánh mắt tò mò, "Hãy xem chúng ta sẽ tìm thấy gì đây! Mỗi cây cỏ, mỗi bức cây, đều có một câu chuyện riêng."
            
            Luna, đôi mắt rạng rỡ, thêm vào, "Đúng vậy! Hãy để chúng ta tận hưởng từng khoảnh khắc và học hỏi từ những điều mới mẻ. Cuộc phiêu lưu không bao giờ kết thúc khi chúng ta mở trái tim mình cho sự khám phá."
            
            Zephyr, bay trên đỉnh cây, nói, "Và tất cả chúng ta đều là những nhà thám hiểm của cuộc đời. Hãy tận hưởng mọi trải nghiệm, từ những ngọn đồi cao tới những thung lũng sâu thẳm, để cuộc sống trở nên đầy đủ và ý nghĩa."
            
            Cuộc hành trình mới bắt đầu, mỗi bước chân là một kỳ vọng, và mỗi bức cây là một câu chuyện đang chờ đợi được kể. Bibo, Luna, và Zephyr, cùng với đám đông sinh linh, đi vào không gian mới với niềm vui, sự tò mò, và lòng tin.
            
            Dưới ánh sáng bình minh, họ hát lên những giai điệu mới, làm cho không khí trở nên phấn khích và tràn đầy sức sống. Cuộc phiêu lưu không ngừng mở ra trước mắt, và mỗi ngày mới là một trang sách chưa được viết, chờ đợi để ghi chú những hạnh phúc và kỷ niệm mới.
            
            Với lòng tin, tình yêu và lòng nhân ái, Bibo, Luna, và Zephyr, cùng với mọi sinh linh khác, tiếp tục chuyến đi của mình, để tạo ra những ký ức đẹp và làm cho cuộc sống trở nên hạnh phúc và ý nghĩa hơn. Và như một trang sách mở ra, họ đều sẵn sàng đối mặt với những trang mới của cuộc phiêu lưu không ngừng này."`
          },
          {id: "12",
          name: `"Trong cuộc hành trình mới, Bibo và Luna dành nhiều thời gian riêng tư để tận hưởng những khoảnh khắc đẹp của tình cảm đặc biệt của họ. Một chiều tà ánh mặt trời, họ tìm thấy một đỉnh đồi nhỏ với tầm nhìn tuyệt vời ra khắp cả khu rừng.

          Bibo, nhìn thẳng vào đôi mắt biếc của Luna, nói, "Luna à, suốt thời gian qua, mỗi phút, mỗi giây đều là một hành trình đặc biệt với em. Tình yêu của chúng ta giống như một cây cầu nối liền tất cả những khoảnh khắc khó quên."
          
          Luna, nắm chặt tay Bibo, đáp lại, "Đúng vậy, Bibo. Tình yêu là nguồn động viên và sức mạnh để chúng ta vượt qua mọi chông gai. Mỗi hạnh phúc, mỗi thách thức, đều khiến chúng ta trở nên mạnh mẽ hơn."
          
          Bibo cười nhẹ, "Em là nguồn sáng của cuộc đời tôi, Luna. Mỗi ngày, mỗi bước chân, đều được tôi chọn vì có em bên cạnh. Chúng ta đã tạo ra một câu chuyện tình yêu kỳ diệu, và tôi không thể nghĩ ra điều gì tuyệt vời hơn."
          
          Luna, với ánh mắt ấm áp, nói, "Chúng ta là những linh hồn đồng điệu, Bibo. Tình yêu của chúng ta không chỉ thuộc về chúng ta mà còn thuộc về toàn bộ khu rừng và mọi sinh linh. Hãy cùng nhau giữ lấy tay nhau và đi qua mọi hành trình, tạo nên những trang sách kỷ niệm đẹp nhất."
          
          Bibo ôm Luna thật chặt, nhìn xuống thung lũng dưới đây. Dưới ánh mặt trời lụa, tình cảm của họ trở nên rõ ràng như làn sương mỏng trải dài khắp nơi. Với tình yêu vững chắc và sự hiểu biết, Bibo và Luna, cùng nhau bước tiếp trên con đường của cuộc phiêu lưu và tình yêu, để tạo nên những chương mới của câu chuyện của họ."`
        },
        {id: "13",
        name: `"Họ tiếp tục hành trình của mình, với lòng tin và tình cảm ngọt ngào bao bọc xung quanh. Dưới tán cây cổ thụ lớn, Bibo và Luna dừng lại, nhìn nhau với sự kính trọng và tình yêu thương.

        Bibo, với giọng nhẹ nhàng, nói, "Luna, mỗi ngày ở bên cạnh em là một món quà quý giá. Em là điểm sáng trong cuộc đời tôi, là nguồn động viên mạnh mẽ nhất. Tình yêu của chúng ta giúp chúng ta vượt qua mọi thử thách và làm cho mỗi khoảnh khắc trở nên đặc biệt."
        
        Luna, đôi mắt lấp lánh, trả lời, "Và tôi biết mình đã tìm thấy người đồng hành đích thực. Bibo, em cảm ơn vì những khoảnh khắc hạnh phúc và sự ấm áp mà tình yêu của chúng ta mang lại. Chúng ta đã xây dựng lên một thế giới tình yêu và hòa bình, và đó là một chiến tích tuyệt vời."
        
        Bibo nhẹ nhàng đưa lên môi Luna một nụ hôn dịu dàng, "Chúng ta sẽ tiếp tục đi, Luna, không chỉ để khám phá thế giới mà còn để làm cho thế giới này trở nên tốt đẹp hơn mỗi ngày. Tình yêu của chúng ta sẽ là nguồn động viên cho mọi sinh linh, giúp họ tìm thấy tình yêu và hạnh phúc trong cuộc sống."
        
        Luna, cười vui vẻ, ôm chặt Bibo và thêm, "Và tất cả những kỷ niệm đẹp, tất cả những chặng đường chúng ta đi qua, đều sẽ là những trang sách kỷ niệm đầy ý nghĩa. Hãy cùng nhau viết nên những trang mới, Bibo, trong cuộc phiêu lưu tình yêu vô tận của chúng ta."
        
        Họ nắm tay nhau và tiếp tục hành trình của mình, dưới ánh mặt trời rực rỡ và trên con đường trải đầy hoa mắt của cuộc phiêu lưu. Bibo và Luna, cùng nhau xây dựng lên những chương mới, với tình yêu và lòng tin làm động lực, để thế giới xung quanh chúng trở nên tươi sáng hơn mỗi ngày.
        "`
      },
    ];

        return (
            <div className="product-container">
              {products.map((product) => (
                <div className="product-list" key={product.id}>
                  <div className="img-product">
                  {/* <Link to={`/products/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                    </Link> */}
                  </div>
                  <div className="name-product">
                    <a>{product.name}</a>
                  </div>
                  <div className="display-product">
                    <a href="/contact">----------------------</a>
                  </div>
                </div>
              ))}
            </div>
    );
}

export default ProductList;