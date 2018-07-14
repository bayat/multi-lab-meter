import {BecIndicator} from '../models/bec-indicator.model';

export const BecIndicators: BecIndicator[] = [
  {id: '1', title: 'Норм. эпителиальные клетки', img: 'assets/img/bec/normal_epithelial_cell.jpg', min: 78, max: 94},
  {
    id: '2',
    title: 'Фагоцитированные апоптозные тела',
    img: 'assets/img/bec/phagocytosed_apoptotic.jpg',
    min: 0,
    max: 2
  },
  {id: '3', title: 'Кареорексис', img: 'assets/img/bec/coriorexis.jpg', min: 1, max: 7},
  //{id: '4', title: 'Безъядерные клетки', img: 'assets/img/bec/', min: 0, max: 2},
  //{id: '5', title: 'ДНЛ', img: 'assets/img/bec/', min: 0, max: 12},
  {id: '6', title: 'Двуядерные клетки', img: 'assets/img/bec/binuclear.jpg', min: 0, max: 4},
  {id: '7', title: 'Вакуольная дистрофия', img: 'assets/img/bec/vacuolar_degeneration.jpg', min: 0, max: 4},
  {id: '8', title: 'Тучные клетки', img: 'assets/img/bec/mast_cells.jpg', min: 0, max: 6},
  {id: '9', title: 'Обсемененность микрофлорой', img: 'assets/img/bec/microflora_dissemination.jpg', min: 5, max: 12},
  {id: '10', title: 'Центральная ядерная перетяжка', img: 'assets/img/bec/central_core.jpg', counterIgnore: true},
  //{id: '11', title: 'Микроядро', img: 'assets/img/bec/', counterIgnore: true},
  {id: '12', title: 'Протрузии', img: 'assets/img/bec/protrusion.jpg', counterIgnore: true},
  {id: '13', title: 'Многоядерная клетка', img: 'assets/img/bec/multinuclear.jpg', counterIgnore: true}
];
