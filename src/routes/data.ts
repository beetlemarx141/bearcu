type Pilihan = Array<{
		teks: string
		rute: number
	}>

type Cerita = Array<{
	rute: number
	judul: string
	deskripsi: string
	ilustrasi?: string
	bg?: string
	pilihan: Pilihan
}>

const bgGameOver = '#faa'
const judulGameOver = '՞߹ - ߹՞ GAME OVER'
const pilihanGameOver: Pilihan = [
	{
		teks: '🏠 Kembali ke rumah',
		rute: 0,
	},
	{
		teks: '🚀 Mulai lagi',
		rute: 1,
	},
]

export const cerita: Cerita = [
	{
		rute: 0,
		judul: 'beruangco adventure',
		ilustrasi: '/res/judul.jpg',
		deskripsi: 'Petualangan seru bersama beruang TIDAK lucu',
		pilihan: [
			{
				teks: 'Mulai',
				rute: 1,
			},
		],
	},
	
]
