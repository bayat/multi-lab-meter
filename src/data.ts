import {Indicator} from './models/indicator.model';

export const CytoData: Indicator[] = [
  {id: '1', title: 'Норм. эпителиальные клетки', img: 'assets/img/cyto/normal_cell.jpg', min: 78, max: 94},
  {id: '2', title: 'Фагоцитированные апоптозные тела', img: 'assets/img/cyto/apoptotic.jpg', min: 0, max: 2},
  {id: '3', title: 'Кареорексис', img: 'assets/img/cyto/karyorrhexis.jpg', min: 1, max: 7},
  {id: '4', title: 'Безъядерные клетки', img: 'assets/img/cyto/nuclear_free.jpg', min: 0, max: 2},
  {id: '5', title: 'ДНЛ', img: 'assets/img/cyto/dnl.jpg', min: 0, max: 12},
  {id: '6', title: 'Двуядерные клетки', img: 'assets/img/cyto/binuclear.jpg', min: 0, max: 4},
  {id: '7', title: 'Вакуольная дистрофия', img: 'assets/img/cyto/vacuolar_degeneration.jpg', min: 0, max: 4},
  {id: '8', title: 'Тучные клетки', img: 'assets/img/cyto/mast_cells.jpg', min: 0, max: 6},
  {id: '9', title: 'Обсемененность микрофлорой', img: 'assets/img/cyto/microflora_dissemination.jpg', min: 5, max: 12},
  {id: '10', title: 'Центральная ядерная перетяжка', img: 'assets/img/cyto/central_core.jpg', counterIgnore: true},
  {id: '11', title: 'Микроядро', img: 'assets/img/cyto/micronuclear.jpg', counterIgnore: true},
  {id: '12', title: 'Протрузии', img: 'assets/img/cyto/protrusion.jpg', counterIgnore: true},
  {id: '13', title: 'Многоядерная клетка', img: 'assets/img/cyto/multinuclear.jpg', counterIgnore: true}
];


export const MyeloData: Indicator[] = [
  {id: '1', title: '0', img: 'assets/img/myelo/zero.jpg'},
  {id: '2', title: '1', img: 'assets/img/myelo/one.jpg'},
  {id: '3', title: '2', img: 'assets/img/myelo/two.jpg'},
  {id: '4', title: '3', img: 'assets/img/myelo/three.jpg'},
  {id: '5', title: '4', img: 'assets/img/myelo/four.jpg'}
];

export const LeycoData: Indicator[] = [
  {id: '1', title: 'Юные нейтрофильные гранулоциты', img: 'assets/img/leyco/young_neutrophils.jpg', min: 0, max: 0.5},
  {id: '2', title: 'Палочкоядерные', img: 'assets/img/leyco/stab.jpg', min: 3, max: 5},
  {id: '3', title: 'Сегментоядерные', img: 'assets/img/leyco/segment_nuclear.jpg', min: 65, max: 70},
  {id: '4', title: 'Эозинофилы', img: 'assets/img/leyco/eosin.jpg', min: 1, max: 5},
  {id: '5', title: 'Базофилы', img: 'assets/img/leyco/basophil.jpg', min: 0.5, max: 10},
  {id: '6', title: 'Моноциты', img: 'assets/img/leyco/monocyte.jpg', min: 6, max: 8},
  {id: '7', title: 'Лимфоциты', img: 'assets/img/leyco/lymphocytes.jpg', min: 20, max: 35}
];
