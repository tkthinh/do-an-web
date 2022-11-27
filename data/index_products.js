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
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":2,
                "image": "img/book/KT1.jpg",
                "title": "Lập Chiến Lược Kinh Doanh Tối Giản",
                "author": "Vaughan Evans",
                "price": 102,
                "type": ["All", "Kinh tế"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":3,
                "image": "img/book/jujutsu.jpg",
                "title": "Jujutsu Kaisen - limited",
                "author": "Gege Akutami",
                "price": 50,
                "type": ["Truyện tranh", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":4,
                "image": "img/book/komi.jpg",
                "title": "Komi-san",
                "author": "Tomohito Oda",
                "price": 25,
                "type": ["Truyện tranh", "Trẻ em", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":5,
                "image": "img/book/KT2.jpg",
                "title": "Đô Thị Thông Minh, Tương Lai Xán Lạn",
                "author": "Mike Barlow",
                "price": 133,
                "type": ["All", "Kinh tế"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":6,
                "image": "img/book/TT6.jpg",
                "title": "Sword Art Online Progressive",
                "author": "REKI KAWAHARA",
                "price": 92,
                "type": ["All", "Tiểu thuyết", "Truyện tranh", "Trẻ em"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":7,
                "image": "img/book/chainsawman.jpg",
                "title": "Chainsaw man",
                "author": "Tatsuki Fujimoto",
                "price": 45,
                "type": ["Truyện tranh", "Kinh dị", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":8,
                "image": "img/book/KT4.jpg",
                "title": "Tỷ Phú Không Tiền",
                "author": "Conor O Clery",
                "price": 132,
                "type": ["All", "Kinh tế"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":9,
                "image": "img/book/KN17.jpg",
                "title": "Tâm Lý Học Thành Công",
                "author": "Carol S Dweck",
                "price": 153,
                "type": ["Kỹ năng sống", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":10,
                "image": "img/book/KN18.jpg",
                "title": "Thao túng tâm lý",
                "author": "Shannon Thomas",
                "price": 43,
                "type": ["Best seller","Kỹ năng sống", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":11,
                "image": "img/book/KT13.jpg",
                "title": "Tinh Thần Chiến Đấu Rực Lửa",
                "author": "Inamori Kazuo",
                "price": 113,
                "type": ["All", "Kinh tế"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":12,
                "image": "img/book/KT3.jpg",
                "title": "Vị Tu Sĩ Bán Chiếc Ferrari",
                "author": "Robin Sharma",
                "price": 77,
                "type": ["All", "Kinh tế"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":13,
                "image": "img/book/KD5.jpg",
                "title": "Tryện Kinh Dị Việt Nam",
                "author": "Thế Lữ",
                "price": 99,
                "type": ["Kinh dị", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":14,
                "image": "img/book/KD6.jpg",
                "title": "Tryện Kinh Dị Việt Nam",
                "author": "Thế Lữ",
                "price": 63,
                "type": ["Kinh dị", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },

            {
                "id":15,
                "image": "img/book/KT5.jpg",
                "title": "Tôi Đã Kiếm 1 Triệu Đô Đầu Tiên",
                "author": "Ewen Chia",
                "price": 189,
                "type": ["All", "Kinh tế"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":16,
                "image": "img/book/KT6.jpg",
                "title": "Bất Động Sản Cho Thế Hệ Tương Lai",
                "author": "Vicki Wusche",
                "price": 67,
                "type": ["All", "Kinh tế"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":17,
                "image": "img/book/KT7.jpg",
                "title": "Think And Grow Rich",
                "author": "Napoleon Hill",
                "price": 104,
                "type": ["All", "Kinh tế"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":18,
                "image": "img/book/KT8.jpg",
                "title": "Bezonomics - Kinh Tế Học Bezos",
                "author": "Brian Dumaine",
                "price": 151,
                "type": ["All", "Kinh tế", "Khoa học"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":19,
                "image": "img/book/KT9.jpg",
                "title": "The Leadership Triangle",
                "author": "Kevin Ford",
                "price": 76,
                "type": ["Best seller","All", "Kinh tế", "Khoa học"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":20,
                "image": "img/book/KT10.jpg",
                "title": "Xây Dựng Sự Độc Đáo",
                "author": "Riccardo Pozzoll",
                "price": 78,
                "type": ["All", "Kinh tế"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":21,
                "image": "img/book/KT11.jpg",
                "title": "Stage Designer",
                "author": "Hoan Nguyễn",
                "price": 111,
                "type": ["All", "Kinh tế", "Khoa học"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":22,
                "image": "img/book/KT12.jpg",
                "title": "Masayoshi Son",
                "author": "Onishi Takahiro",
                "price": 114,
                "type": ["All", "Kinh tế"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },

            {
                "id":23,
                "image": "img/book/KT14.jpg",
                "title": "Bí Mật Tư Duy Triệu Phú (Tái Bản 2021)",
                "author": "T Harv Eker",
                "price": 87,
                "type": ["All", "Kinh tế"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":24,
                "image": "img/book/TT1.jpg",
                "title": "Từ Điển Tiếng “Em” - Tái Bản 2021",
                "author": "Khotudien",
                "price": 55,
                "type": ["Best seller","All", "Tiểu thuyết"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
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
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":27,
                "image": "img/book/dac-nhan-tamjpg.jpg",
                "title": "Đắc Nhân Tâm",
                "author": "Nguyễn Văn Phước",
                "price": 70,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":28,
                "image": "img/book/yeu.jpg",
                "title": "OSHO - Yêu - Being In Love",
                "author": "OSHO",
                "price": 119,
                "type": ["All", "Tiểu thuyết", "Trẻ em"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":29,
                "image": "img/book/TT4.jpg",
                "title": "Bố Già (Đông A)",
                "author": "Mario Puzo",
                "price": 104,
                "type": ["All", "Tiểu thuyết", "Kinh tế"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":30,
                "image": "img/book/TT5.jpg",
                "title": "Thế Giới Otome Game",
                "author": "Mishima Yomu",
                "price": 112,
                "type": ["All","Best seller", "Tiểu thuyết", "Truyện tranh", "Trẻ em"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },

            {
                "id":31,
                "image": "img/book/TT7.jpg",
                "title": "Hai Số Phận",
                "author": "Jeffrey Archer",
                "price": 104,
                "type": ["All", "Tiểu thuyết"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":32,
                "image": "img/book/TT8.jpg",
                "title": "Hai Vạn Dặm Dưới Đáy Biển ",
                "author": "Jules Verne",
                "price": 74,
                "type": ["All", "Tiểu thuyết"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
            },
            {
                "id":33,
                "image": "img/book/KN1.jpg",
                "title": "Thay Đổi Cuộc Sống Với Nhân Số Học",
                "author": "Lê Đỗ Quỳnh Hương",
                "price": 177,
                "type": ["Kỹ năng sống", "Khoa học", "All"],
                "description":"THE TEST HAS ENDED, I AM VICTORIOUS, I AM THE HERALD OF OBLIVION, I AM RHAASRT"
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
                "id":500,
                "image": "img/book/but.jpg",
                "title": "Hộp 20 bút bi 0.5mm",
                "author": "Thiên Long",
                "price": 69
            },
            {
                "id":501,
                "image": "img/book/tap.jpg",
                "title": "Tập Sinh Viên 4 Ô Ly",
                "author": "Elephant",
                "price": 17
            },
            {
                "id":502,
                "image": "img/book/balo.jpg",
                "title": "Cặp Đa Năng Simplex 06",
                "author": "STARGO",
                "price": 462
            },
            {
                "id":503,
                "image": "img/book/chi.jpg",
                "title": "Ruột Chì Ngòi Lớn 2B",
                "author": "Uyên Loan",
                "price": 4
            },
            {
                "id":504,
                "image": "img/book/bothuchanh.jpg",
                "title": "Bộ 2 Hộp Thực Hành Toán Lớp 2",
                "author": "Việt Nam",
                "price": 188
            },
            {
                "id":505,
                "image": "img/book/puzzle.jpg",
                "title": "Bộ Xếp Hình Puzzle",
                "author": "Castorland",
                "price": 649
            },
            {
                "id":506,
                "image": "img/book/cal.jpg",
                "title": "Máy Tính Vinacal 570 ES Plus II ",
                "author": "Vinacal",
                "price": 540
            },
            {
                "id":507,
                "image": "img/book/butdaquang.jpg",
                "title": "Bút dạ quang",
                "author": "Schner",
                "price": 17
            }
        ]
    });
}