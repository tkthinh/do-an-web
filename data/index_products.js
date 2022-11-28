const pstatus = true;
if (window.localStorage.status != pstatus || !window.localStorage.product) {
    window.localStorage.status = pstatus;
    window.localStorage.product = JSON.stringify({
        book: [
            {
                "id":1,
                "image": "img/book/TT2.jpg",
                "title": "Tiểu Thuyết Chuyển Thể - Thanh Gươm Diệt Quỷ",
                "author": "Koyoharu Gotouge",
                "price": 51,
                "type": ["All", "Tiểu thuyết", "Truyện tranh", "Trẻ em"],
                "description":"Truyện kể về hành trình trở thành kiếm sĩ diệt quỷ của thiếu niên Kamado Tanjirō sau khi gia đình cậu bị quỷ sát hại và em gái Nezuko của cậu bị biến thành quỷ."
            },
            {
                "id":2,
                "image": "img/book/KT1.jpg",
                "title": "Lập Chiến Lược Kinh Doanh Tối Giản",
                "author": "Vaughan Evans",
                "price": 102,
                "type": ["All", "Kinh tế"],
                "description":"Trong Lập chiến lược kinh doanh tối giản, tác giả Vaughan Evans áp dụng nguyên tắc KISS vào việc xây dựng chiến lược với những ví dụ sống động, các giải pháp thực tế và cách tiếp cận dễ hiểu sẽ cho bạn thấy làm thế nào để phát triển nhanh chóng một chiến lược giúp cho doanh nghiệp của bạn tiến thẳng đến mục tiêu."
            },
            {
                "id":3,
                "image": "img/book/jujutsu.jpg",
                "title": "Jujutsu Kaisen - limited",
                "author": "Gege Akutami",
                "price": 50,
                "type": ["Truyện tranh", "All"],
                "description":"Trong Lập chiến lược kinh doanh tối giản, tác giả Vaughan Evans áp dụng nguyên tắc KISS vào việc xây dựng chiến lược với những ví dụ sống động, các giải pháp thực tế và cách tiếp cận dễ hiểu sẽ cho bạn thấy làm thế nào để phát triển nhanh chóng một chiến lược giúp cho doanh nghiệp của bạn tiến thẳng đến mục tiêu."
            },
            {
                "id":4,
                "image": "img/book/komi.jpg",
                "title": "Komi-san",
                "author": "Tomohito Oda",
                "price": 25,
                "type": ["Truyện tranh", "Trẻ em", "All"],
                "description":"Vào ngày đầu tiên nhập học ở trường Cao trung Tư thục Itan danh tiếng, Komi Shōko lập tức nhận được sự chú ý từ mọi người qua ngoại hình xinh đẹp và sự lịch thiệp tao nhã. Tuy nhiên Tadano Hitohito, một cậu học sinh cao trung hết sức bình thường được xếp chỗ ngồi kế bên cô ấy, nhận ra rằng phía sau dáng vẻ quý phái đó, Komi lại mắc hội chứng về giao tiếp, không biết làm sao để nói chuyện và không thể kết bạn được với bất kì ai. Từ đó, Tadano quyết định đặt ra kế hoạch giúp Komi có được 100 người bạn, trong đó cậu chính là người bạn đầu tiên của Komi sẽ giúp cô kiếm thêm 99 người bạn nữa"
            },
            {
                "id":5,
                "image": "img/book/KT2.jpg",
                "title": "Đô Thị Thông Minh, Tương Lai Xán Lạn",
                "author": "Mike Barlow",
                "price": 133,
                "type": ["All", "Kinh tế"],
                "description":"Cuốn sách là câu chuyện kể về những công dân thông minh mà cuộc sống của họ đã được biến đổi từ những chương trình, sáng kiến và dự án đô thị thông minh. Quyển sách là bản hướng dẫn đến với một thế giới đang dần nổi lên, trong đó con người không ngừng tương tác với máy móc thông minh, xe cộ, nhà cửa và các hệ thống thông minh."
            },
            {
                "id":6,
                "image": "img/book/TT6.jpg",
                "title": "Sword Art Online Progressive",
                "author": "REKI KAWAHARA",
                "price": 92,
                "type": ["All", "Tiểu thuyết", "Truyện tranh", "Trẻ em"],
                "description":"“Không có cách nào để đăng xuất khỏi trò chơi này. Sự khác biệt duy nhất là bạn chết khi nào và ở đâu…” Xem thêm tại: https://www.galaxycine.vn/phim/sword-art-online-progressive-aria-of-a-starless-night"
            },
            {
                "id":7,
                "image": "img/book/chainsawman.jpg",
                "title": "Chainsaw man",
                "author": "Tatsuki Fujimoto",
                "price": 45,
                "type": ["Truyện tranh", "Kinh dị", "All"],
                "description":"Cậu thiếu niên Denji sống một cuộc sống nghèo khổ và phải làm việc vất vả để trả nợ. Cậu vừa sống vừa làm Thợ Săn Quỷ cùng với Pochita – loài quỷ Chainsaw, nhưng rồi một ngày cậu trở thành mục tiêu của một con quỷ tàn bạo…"
            },
            {
                "id":8,
                "image": "img/book/KT4.jpg",
                "title": "Tỷ Phú Không Tiền",
                "author": "Conor O Clery",
                "price": 132,
                "type": ["All", "Kinh tế"],
                "description":"Cuốn Tỷ phú không tiền là tiểu sử về Chuck Feeney, tường thuật lại những sóng gió ông và các cộng sự trải qua trên thương trường để kiến tạo nên một đế chế bán lẻ hùng mạnh, cũng như những nỗ lực của ông trong việc đem toàn bộ gia sản đi làm từ thiện. Trong sách cũng có một chương kể về những hoạt động tài trợ của Chuck Feeney tại Việt Nam bao gồm việc hợp tác với tổ chức Đông Tây Hội Ngộ, hay tài trợ cho trường RMIT. Tác giả cũng nhấn mạnh tầm ảnh hưởng của Feeney trong việc khuyến khích các tỷ phú trên thế giới như Bill Gates và Warren Buffett cho đi khi còn sống."
            },
            {
                "id":9,
                "image": "img/book/KN17.jpg",
                "title": "Tâm Lý Học Thành Công",
                "author": "Carol S Dweck",
                "price": 153,
                "type": ["Kỹ năng sống", "All"],
                "description":"Cuốn sách sẽ cho bạn thấy không chỉ khả năng và tài trí mới mang lại thành công cho chúng ta, mà phần lớn do cách tiếp cận mục tiêu bằng lối tư duy nào. Việc tán dương trí thông minh và khả năng của con bạn không hề nuôi dưỡng lòng tự trọng và dẫn đến thành tựu, mà thậm chí còn phương hại đến thành công sau này. Với tư duy đứng đắn, chúng ta có thể tạo động lực cho con cái và giúp chúng phát triển trong trường học, cũng như đạt được mục tiêu của bản thân trong cuộc sống và sự nghiệp. Dweck đã giúp tất cả các bậc cha mẹ, giáo viên, CEO và vận động viên thấy một ý tưởng đơn giản về não bộ có thể tạo ra tình yêu học tập và sự kiên trì – cơ sở cho những thành tựu vĩ đại ở mọi lĩnh vực."
            },
            {
                "id":10,
                "image": "img/book/KN18.jpg",
                "title": "Thao túng tâm lý",
                "author": "Shannon Thomas",
                "price": 43,
                "type": ["Best seller","Kỹ năng sống", "All"],
                "description":"Bằng những kiến thức chuyên sâu và sự thấu hiểu, tác giả sẽ giúp bạn từng bước vượt qua những rắc rối của thao túng tâm lý, lạm dụng tiểm ẩn để có cuộc sống ý nghĩa và lành mạnh hơn."
            },
            {
                "id":11,
                "image": "img/book/KT13.jpg",
                "title": "Tinh Thần Chiến Đấu Rực Lửa",
                "author": "Inamori Kazuo",
                "price": 113,
                "type": ["All", "Kinh tế"],
                "description":"Hãy cùng tìm hiểu tinh thần của doanh nhân mạnh mẽ nhất Nhật Bản Sau tái sinh JAL, tái sinh Nhật Bản! Quyển sách truyền đạt triết lý thành công, biến nguy thành cơ! Tại sao quản trị của Inamori là mạnh mẽ nhất? Tại sao bây giờ triết lý quản trị ấy vẫn được quan tâm? Câu trả lời nằm trong quyển sách này."
            },
            {
                "id":12,
                "image": "img/book/KT3.jpg",
                "title": "Vị Tu Sĩ Bán Chiếc Ferrari",
                "author": "Robin Sharma",
                "price": 77,
                "type": ["All", "Kinh tế"],
                "description":"“Vị tu sĩ bán chiếc Ferrari” là một câu chuyện đầy cảm hứng cung cấp bạn đọc cách sống can đảm, cân bằng, phong phú và nhiều niềm vui hơn."
            },
            {
                "id":13,
                "image": "img/book/KD5.jpg",
                "title": "Truyện Kinh Dị Việt Nam",
                "author": "Thế Lữ",
                "price": 99,
                "type": ["Kinh dị", "All"],
                "description":"TRUYỆN KINH DỊ SỢ VÃI LINH HỒN, THỀ"
            },
            {
                "id":14,
                "image": "img/book/KD6.jpg",
                "title": "Tryện Kinh Dị Việt Nam",
                "author": "Thế Lữ",
                "price": 63,
                "type": ["Kinh dị", "All"],
                "description":"TRUYỆN KINH DỊ SỢ VÃI LINH HỒN, THỀ"
            },

            {
                "id":15,
                "image": "img/book/KT5.jpg",
                "title": "Tôi Đã Kiếm 1 Triệu Đô Đầu Tiên",
                "author": "Ewen Chia",
                "price": 189,
                "type": ["All", "Kinh tế"],
                "description":"“Bằng cách thuật lại câu chuyện của chính mình về marketing liên kết, Ewen Chia đưa ra chỉ dẫn rõ ràng cho bất kỳ ai muốn sử dụng công thức mà ông thấy thành công.”"
            },
            {
                "id":16,
                "image": "img/book/KT6.jpg",
                "title": "Bất Động Sản Cho Thế Hệ Tương Lai",
                "author": "Vicki Wusche",
                "price": 67,
                "type": ["All", "Kinh tế"],
                "description":"Để đảm bảo tương lai tài chính của bản thân, gia đình và thế hệ tương lai, chúng ta phải hành động ngay bây giờ, và dạy con cái biết rằng tiền là một công cụ. Nếu tài sản được sử dụng tốt, chúng ta có thể mua các tài sản sinh ra tiền nhằm đảm bảo tương lai tài chính của gia đình suốt đời."
            },
            {
                "id":17,
                "image": "img/book/KT7.jpg",
                "title": "Think And Grow Rich",
                "author": "Napoleon Hill",
                "price": 104,
                "type": ["All", "Kinh tế"],
                "description":"Cuốn sách sẽ giúp bạn trở nên giàu có, làm giàu cho cuộc sống của bạn trên tất cả các phương diện của cuộc sống chứ không chỉ về tài chính và vật chất."
            },
            {
                "id":18,
                "image": "img/book/KT8.jpg",
                "title": "Bezonomics - Kinh Tế Học Bezos",
                "author": "Brian Dumaine",
                "price": 151,
                "type": ["All", "Kinh tế", "Khoa học"],
                "description":"Amazon đã thay đổi cuộc sống loài người và trở thành công ty lớn nhất thế giới như thế nào?"
            },
            {
                "id":19,
                "image": "img/book/KT9.jpg",
                "title": "The Leadership Triangle",
                "author": "Kevin Ford",
                "price": 76,
                "type": ["Best seller","All", "Kinh tế", "Khoa học"],
                "description":"Phải biết cách tự lãnh đạo bản thân mình trước, nếu muốn lãnh đạo nhân viên tốt"
            },
            {
                "id":20,
                "image": "img/book/KT10.jpg",
                "title": "Xây Dựng Sự Độc Đáo",
                "author": "Riccardo Pozzoll",
                "price": 78,
                "type": ["All", "Kinh tế"],
                "description":"Khi một đam mê biến thành một hoạt động kinh doanh"
            },
            {
                "id":21,
                "image": "img/book/KT11.jpg",
                "title": "Stage Designer",
                "author": "Hoan Nguyễn",
                "price": 111,
                "type": ["All", "Kinh tế", "Khoa học"],
                "description":"STAGE DESIGNER LÀ NGƯỜI THIẾT LẬP Ý TƯỞNG THỊ GIÁC TỔNG THỂ TRONG SẢN XUẤT VÀ THIẾT KẾ KHÔNG GIAN S N KHẤU MANG TÍNH NGHỆ THUẬT."
            },
            {
                "id":22,
                "image": "img/book/KT12.jpg",
                "title": "Masayoshi Son",
                "author": "Onishi Takahiro",
                "price": 114,
                "type": ["All", "Kinh tế"],
                "description":"Cuốn sách cho thấy hành trình sôi nổi của Son trong sự nghiệp kinh doanh cũng như hiểu rõ hơn về con người ông, làm sáng tỏ những điều mà nhiều bạn đọc quan tâm: lý tưởng kinh doanh của Son là gì, phương thức kinh doanh khó nắm bắt của ông được thực thi ra sao, và con người của Son thể hiện qua đời sống hằng ngày và trong công việc. "
            },

            {
                "id":23,
                "image": "img/book/KT14.jpg",
                "title": "Bí Mật Tư Duy Triệu Phú (Tái Bản 2021)",
                "author": "T Harv Eker",
                "price": 87,
                "type": ["All", "Kinh tế"],
                "description":"Trong cuốn sách này T. Harv Eker sẽ tiết lộ những bí mật tại sao một số người lại đạt được những thành công vượt bậc, được số phận ban cho cuộc sống sung túc, giàu có, trong khi một số người khác phải chật vật, vất vả mới có một cuộc sống qua ngày. Bạn sẽ hiểu được nguồn gốc sự thật và những yếu tố quyết định thành công, thất bại để rồi áp dụng, thay đổi cách suy nghĩ, lên kế hoạch rồi tìm ra cách làm việc, đầu tư, sử dụng nguồn tài chính của bạn theo hướng hiệu quả nhất."
            },
            {
                "id":24,
                "image": "img/book/TT1.jpg",
                "title": "Từ Điển Tiếng “Em” - Tái Bản 2021",
                "author": "Khotudien",
                "price": 55,
                "type": ["Best seller","All", "Tiểu thuyết"],
                "description":"Cuốn sách này giống như một chiếc hộp Pandora thú vị và hấp dẫn người đọc, vì bạn không thể đoán trước được tác giả sẽ “định nghĩa” câu nói đó theo nghĩa nào, cho ta thêm thích thú với những ngôn từ đáng yêu sử dụng mỗi ngày."
            },

            {
                "id":25,
                "image": "img/book/TT3.jpg",
                "title": "Bước Chậm Lại Giữa Thế Gian Vội Vã",
                "author": "Hae Min",
                "price": 58,
                "type": ["All", "Tiểu thuyết"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":26,
                "image": "img/book/thientai.jpg",
                "title": "Thiên tài bên trái, kẻ điên bên phải",
                "author": "Cao Minh",
                "price": 97,
                "type": ["Best seller","Khoa học", "All", "Tiểu thuyết"],
                "description":"Ra mắt lần đầu năm 2012, Bước chậm lại giữa thế gian vội vã của Đại đức Hae Min đã liên tục đứng đầu danh sách best-seller của nhiều trang sách trực tuyến uy tín của Hàn Quốc, trở thành cuốn sách chữa lành cho hàng triệu người trẻ luôn tất bật với nhịp sống hiện đại hối hả"
            },
            {
                "id":27,
                "image": "img/book/dac-nhan-tamjpg.jpg",
                "title": "Đắc Nhân Tâm",
                "author": "Nguyễn Văn Phước",
                "price": 70,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"Đắc Nhân Tâm không chỉ là là nghệ thuật thu phục lòng người, Đắc Nhân Tâm còn đem lại cho độc giả góc nhìn, suy nghĩ sâu sắc về việc giao tiếp ứng xử."
            },
            {
                "id":28,
                "image": "img/book/yeu.jpg",
                "title": "OSHO - Yêu - Being In Love",
                "author": "OSHO",
                "price": 119,
                "type": ["All", "Tiểu thuyết", "Trẻ em"],
                "description":"Những người đói khát trong nhu cầu, những người luôn kỳ vọng ở tình yêu chính là những người đau khổ nhất. Hai kẻ đói khát tìm thấy nhau trong một mối quan hệ yêu đương cùng những kỳ vọng người kia sẽ mang đến cho mình thứ mình cần – về cơ bản sẽ nhanh chóng thất vọng về nhau và cùng mang đến ngục tù khổ đau cho nhau. Trong cuốn sách Yêu, Osho - bậc thầy tâm linh, người được tôn vinh là một trong 1000 người kiến tạo của thế kỷ 20 – đã đưa ra những kiến giải sâu sắc về nhu cầu tâm lý có sức mạnh lớn nhất của nhân loại và “chỉ cho chúng ta cách trải nghiệm tình yêu”."
            },
            {
                "id":29,
                "image": "img/book/TT4.jpg",
                "title": "Bố Già (Đông A)",
                "author": "Mario Puzo",
                "price": 104,
                "type": ["All", "Tiểu thuyết", "Kinh tế"],
                "description":"Với kết cấu hoàn hảo, cốt truyện không thiếu những pha hành động gay cấn, tình tiết bất ngờ và không khí kình địch đến nghẹt thở, Bố già xứng đáng là đỉnh cao trong sự nghiệp văn chương của Mario Puzo."
            },
            {
                "id":30,
                "image": "img/book/TT5.jpg",
                "title": "Thế Giới Otome Game",
                "author": "Mishima Yomu",
                "price": 112,
                "type": ["All","Best seller", "Tiểu thuyết", "Truyện tranh", "Trẻ em"],
                "description":"Leon một nhân viên công sở tại Nhật Bản bị chuyển sinh sang thế giới “Otome game” của kiếm và phép thuật. Cậu tuyệt vọng với thế giới trọng nữ khinh nam đó. Tại thế giới này, đàn ông chỉ như loài súc vật với nhiệm vụ duy nhất là cung phụng phái nữ. Chỉ có Hoàng thái tử cùng nhóm trai đẹp mà ngài dẫn đầu là ngoại lệ."
            },

            {
                "id":31,
                "image": "img/book/TT7.jpg",
                "title": "Hai Số Phận",
                "author": "Jeffrey Archer",
                "price": 104,
                "type": ["All", "Tiểu thuyết"],
                "description":"Khi bạn yêu thích tác phẩm này, người ta sẽ nhìn ra cá tính và tâm hồn thú vị của bạn!"
            },
            {
                "id":32,
                "image": "img/book/TT8.jpg",
                "title": "Hai Vạn Dặm Dưới Đáy Biển ",
                "author": "Jules Verne",
                "price": 74,
                "type": ["All", "Tiểu thuyết"],
                "description":"Hai vạn dặm dưới đáy biển là một trong những tác phẩm thành công nhất của Jules Verne. Rất nhiều năm đã qua, những hiểu biết mọi mặt của con người về biển đã tiến những bước dài. Nhiều khái niệm đã đổi thay về căn bản. Nhưng sự phát triển của khoa học, kỹ thuật không làm chúng ta giảm lòng yêu mến và kính phục Jules Verne, vì cuốn sách này đã góp phần hướng biết bao thanh thiếu niên tiến vào khoa học, và bao người sau này đã trở thành những nhà hải dương học, ngư học và chế tạo tàu ngầm!"
            },
            {
                "id":33,
                "image": "img/book/KN1.jpg",
                "title": "Thay Đổi Cuộc Sống Với Nhân Số Học",
                "author": "Lê Đỗ Quỳnh Hương",
                "price": 177,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"Cuốn sách “Thay đổi cuộc sống với Nhân số học”mang lại đầy đủ những kiến thức quan trọng nhất mà người hứng thú với Nhân số học cần tìm hiểu. Sách bao gồm các kiến thức về ba thể trong một con người, con số chủ đạo, biểu đồ ngày sinh, các mũi tên chỉ đặc điểm, con số ngày sinh, chu kỳ 9 năm, ba giai đoạn và bốn đỉnh cao của đời người cùng ý nghĩa, sức mạnh của cái tên của mỗi người. Các kiến thức này được diễn giải, phân tích và đi kèm các ví dụ cụ thể."
            },
            {
                "id":34,
                "image": "img/book/KN2.jpg",
                "title": "Đọc Vị Bất Kỳ Ai",
                "author": "TS David J Lieberman",
                "price": 54,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":35,
                "image": "img/book/KN3.jpg",
                "title": "Hiểu Về Trái Tim",
                "author": "Minh Niệm",
                "price": 126,
                "type": ["Kỹ năng sống", "Khoa học", "All", "Tiểu thuyết"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":36,
                "image": "img/book/KN4.jpg",
                "title": "Tâm Lý Học - Phác Họa Chân Dung Kẻ Phạm Tội",
                "author": "Vũ",
                "price": 108,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":37,
                "image": "img/book/tokyo.jpg",
                "title": "Tokyo Revengers - tập 6",
                "author": "Ken Wakui",
                "price": 115,
                "type": ["Best seller","Truyện tranh", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":38,
                "image": "img/book/spyxfamily.jpg",
                "title": "SPY x FAMILY",
                "author": "Tatsuya Endo",
                "price": 25,
                "type": ["Truyện tranh", "Trẻ em", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":39,
                "image": "img/book/kimestu.jpg",
                "title": "Kimestu no Yaiba",
                "author": "Koyoharu Gotouge",
                "price": 25,
                "type": ["Truyện tranh", "Trẻ em", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":40,
                "image": "img/book/KN5.jpg",
                "title": "Đời Ngắn Đừng Ngủ Dài",
                "author": "Robin Sharma",
                "price": 55,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":41,
                "image": "img/book/KN6.jpg",
                "title": "Rèn Luyện Tư Duy Phản Biện",
                "author": "Albert Rutherford",
                "price": 65,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":42,
                "image": "img/book/KN7.jpg",
                "title": "Tuổi Trẻ Đáng Giá Bao Nhiêu",
                "author": "Rossie",
                "price": 63,
                "type": ["Kỹ năng sống", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":43,
                "image": "img/book/KN8.jpg",
                "title": "Sức Mạnh Tiềm Thức ",
                "author": "Joseph Murphyc",
                "price": 102,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":44,
                "image": "img/book/KN9.jpg",
                "title": "Chủ Nghĩa Khắc Kỷ",
                "author": "William B Irvine",
                "price": 87,
                "type": ["Kỹ năng sống", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":45,
                "image": "img/book/KN10.jpg",
                "title": "Đừng Lựa Chọn An Nhàn Khi Còn Trẻ",
                "author": "Cảnh Thiên",
                "price": 87,
                "type": ["Kỹ năng sống", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":46,
                "image": "img/book/TE1.jpg",
                "title": "Cẩm Nang Cấu Trúc Tiếng Anh",
                "author": "Trang",
                "price": 72,
                "type": ["Trẻ em", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":47,
                "image": "img/book/TE2.jpg",
                "title": "Ngữ Pháp Tiếng Anh ",
                "author": "Mai Lan Hương",
                "price": 50,
                "type": ["Trẻ em", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":48,
                "image": "img/book/TE3.jpg",
                "title": "Tiếng Nhật Cho Mọi Người",
                "author": "Minna no Nihongo",
                "price": 71,
                "type": ["Trẻ em", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":49,
                "image": "img/book/TE4.jpg",
                "title": "Sách Tự Học Hiragana Katakana",
                "author": "AOTS",
                "price": 64,
                "type": ["Trẻ em", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":50,
                "image": "img/book/KN11.jpg",
                "title": "Khéo Ăn Nói Sẽ Có Được Thiên Hạ",
                "author": "Trác Nhả",
                "price": 76,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":51,
                "image": "img/book/KN12.jpg",
                "title": "Người Giàu Có Nhất Thành Babylon",
                "author": "George S Clason",
                "price": 52,
                "type": ["Kỹ năng sống", "Trẻ em", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":52,
                "image": "img/book/KN13.jpg",
                "title": "Thần Số Học: Thấu Hiểu Nhân Tâm",
                "author": "Tống Khánh Thượng",
                "price": 76,
                "type": ["Kỹ năng sống", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":53,
                "image": "img/book/KN14.jpg",
                "title": "Một Đời Như Kẻ Tìm Đường",
                "author": "Phan Văn Trường",
                "price": 166,
                "type": ["Kỹ năng sống", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":54,
                "image": "img/book/KN15.jpg",
                "title": "Tư Duy Phản Biện",
                "author": "Zoe McKey",
                "price": 55,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":55,
                "image": "img/book/KN16.jpg",
                "title": "Kiếp Nào Ta Cũng Tìm Thấy Nhau ",
                "author": "Brian L Weiss",
                "price": 69,
                "type": ["Kỹ năng sống", "All", "Tiểu thuyết"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },

            {
                "id":56,
                "image": "img/book/KN19.jpg",
                "title": "Cân Bằng CảM Xúc, Cả Lúc Bão Giông",
                "author": "Richard Nicholls",
                "price": 74,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },

            {
                "id":57,
                "image": "img/book/TE6.jpg",
                "title": "Ngữ Pháp Tiếng Hàn Thông Dụng",
                "author": "Ahn Jean Myung",
                "price": 213,
                "type": ["Trẻ em", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":58,
                "image": "img/book/KD1.jpg",
                "title": "Dị Chủng 2 - Tàn Thế",
                "author": "Guillermo Del",
                "price": 114,
                "type": ["Kinh dị", "All", "Tiểu thuyết"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":59,
                "image": "img/book/KD2.jpg",
                "title": "Mùa Hạn Kinh Hoàng - The Dry",
                "author": "Jane Harper",
                "price": 70,
                "type": ["Kinh dị", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":60,
                "image": "img/book/KD3.jpg",
                "title": "Di Sản Kinh Hoàng",
                "author": "Lisa Gardner",
                "price": 137,
                "type": ["Best seller","Kinh dị", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":61,
                "image": "img/book/KD4.jpg",
                "title": "Tryện Kinh Dị Việt Nam",
                "author": "Thế Lữ",
                "price": 59,
                "type": ["Kinh dị", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },

            {
                "id":62,
                "image": "img/book/KD7.jpg",
                "title": "Tryện Kinh Dị Việt Nam",
                "author": "Lan Khai",
                "price": 87,
                "type": ["Kinh dị", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":63,
                "image": "img/book/TE7.jpg",
                "title": "Tiếng Hàn Tổng Hợp",
                "author": "Cho Hang Rok",
                "price": 120,
                "type": ["Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":64,
                "image": "img/book/TE8.jpg",
                "title": "Giáo Trình Hán Ngữ 1",
                "author": "Chưa cập nhật",
                "price": 71,
                "type": ["Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":65,
                "image": "img/book/TE9.jpg",
                "title": "Keep It Up - Tập Viết Chữ Hán",
                "author": "Jeyong",
                "price": 56,
                "type": ["All", "Trẻ em", "Khoa học"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":66,
                "image": "img/book/OP.jpg",
                "title": "Vivre Card ",
                "author": "Eiichiro Oda",
                "price": 120,
                "type": ["Truyện tranh", "Trẻ em", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":67,
                "image": "img/book/blackjack.jpg",
                "title": "Black Jack - tập 11 ",
                "author": "Osamu Tezuka",
                "price": 30,
                "type": ["Truyện tranh", "Kinh dị", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":68,
                "image": "img/book/bleach.jpg",
                "title": "BLEACH - tập 70 ",
                "author": "Tite Kubo",
                "price": 25,
                "type": ["Truyện tranh", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":69,
                "image": "img/book/ranma.jpg",
                "title": "Ranma 1/2 - tập 19 ",
                "author": "Rumiko TAKAHASHI",
                "price": 70,
                "type": ["Truyện tranh", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":70,
                "image": "img/book/conan.jpg",
                "title": "CONAN - tập 98 ",
                "author": "Gosho Aoyama",
                "price": 20,
                "type": ["Truyện tranh", "Khoa học", "Kinh dị", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":71,
                "image": "img/book/overlord.jpg",
                "title": "OVERLORD - tập 13 ",
                "author": "Maruyama Kugane",
                "price": 48,
                "type": ["Truyện tranh", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },

            {
                "id":72,
                "image": "img/book/tienganh.jpg",
                "title": "30 Chủ đề từ vựng tiếng anh",
                "author": "Trang Anh",
                "price": 133,
                "type": ["Best seller","Trẻ em", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":73,
                "image": "img/book/hoahoc.jpg",
                "title": "Sổ tay hóa học",
                "author": "Trần Thị Yến",
                "price": 40,
                "type": ["All", "Khoa học", "Trẻ em"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":74,
                "image": "img/book/giakim.jpg",
                "title": "Nhà giả kim",
                "author": "Paulo Coelho",
                "price": 65,
                "type": ["All", "Tiểu thuyết", "Kỹ năng sống"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":75,
                "image": "img/book/demvinhhang.jpg",
                "title": "Đêm Vĩnh Hằng",
                "author": "Guillermo Del Toro",
                "price": 140,
                "type": ["Kinh dị", "All", "Tiểu thuyết"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":76,
                "image": "img/book/eng.jpg",
                "title": "English Grammar in Use Book w Ans",
                "author": "Raymond Murphy",
                "price": 170,
                "type": ["Trẻ em", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":77,
                "image": "img/book/kinang.jpg",
                "title": "Kĩ năng sống",
                "author": "PGS TS Huỳnh Văn Sơn",
                "price": 30,
                "type": ["Khoa học", "Kỹ năng sống", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":78,
                "image": "img/book/ando.jpg",
                "title": "mahabharata",
                "author": "DK",
                "price": 520,
                "type": ["All", "Tiểu thuyết", "Trẻ em", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            }
        ],
        
        vpp: [
            {
                "id":79,
                "image": "img/book/but.jpg",
                "title": "Hộp 20 bút bi 0.5mm",
                "author": "Thiên Long",
                "price": 69
            },
            {
                "id":80,
                "image": "img/book/tap.jpg",
                "title": "Tập Sinh Viên 4 Ô Ly",
                "author": "Elephant",
                "price": 17
            },
            {
                "id":81,
                "image": "img/book/balo.jpg",
                "title": "Cặp Đa Năng Simplex 06",
                "author": "STARGO",
                "price": 462
            },
            {
                "id":82,
                "image": "img/book/chi.jpg",
                "title": "Ruột Chì Ngòi Lớn 2B",
                "author": "Uyên Loan",
                "price": 4
            },
            {
                "id":83,
                "image": "img/book/bothuchanh.jpg",
                "title": "Bộ 2 Hộp Thực Hành Toán Lớp 2",
                "author": "Việt Nam",
                "price": 188
            },
            {
                "id":84,
                "image": "img/book/puzzle.jpg",
                "title": "Bộ Xếp Hình Puzzle",
                "author": "Castorland",
                "price": 649
            },
            {
                "id":85,
                "image": "img/book/cal.jpg",
                "title": "Máy Tính Vinacal 570 ES Plus II ",
                "author": "Vinacal",
                "price": 540
            },
            {
                "id":86,
                "image": "img/book/butdaquang.jpg",
                "title": "Bút dạ quang",
                "author": "Schner",
                "price": 17
            }
        ]
    });
}