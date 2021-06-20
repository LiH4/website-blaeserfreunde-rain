export default class EventsSliderComponent {

    private readonly _slider: HTMLElement;

    private readonly _arrowNext: HTMLElement;
    private readonly _arrowPrev: HTMLElement;

    constructor() {
        this._slider = document.querySelector('.c-event-slider');

        this._arrowNext = document.querySelector('.c-event-slider__btn--next');
        this._arrowPrev = document.querySelector('.c-event-slider__btn--prev');

        console.log('EventSliderComponent');

        this._initSlider();
    }


    private _initSlider() {

        console.log('initSlider');

        if(this._slider) {
            const $slider = $(this._slider);

            $slider.slick({
                centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
           /*     prevArrow: this._arrowPrev,
                nextArrow: this._arrowNext*/
            });
        }
    }
}

