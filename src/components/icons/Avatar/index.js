import React from 'react';
import PropTypes from 'prop-types';

export default function Avatar(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} height="32px" width="32px" version="1.1" viewBox="0 0 32 32">
            <defs>
                <rect height="32" id="path-1" width="32" rx="16" x="0" y="0" />
            </defs>
            <g id="new-pages" fill="none" stroke="none" strokeWidth="1">
                <g id="admin-forms" transform="translate(-142.000000, -574.000000)">
                    <g id="Group-24" transform="translate(129.000000, 574.000000)">
                        <g id="Group-12" transform="translate(13.000000, 0.000000)">
                            <g id="avatar-man">
                                <g id="Fill-105-+-Fill-107-+-Fill-108-+-Fill-109-+-Fill-110-+-Fill-111-+-Fill-112-+-Fill-113-+-Fill-114-+-Fill-115-Mask">
                                    <mask id="mask-2" fill="white">
                                        <rect height="32" width="32" rx="16" x="0" y="0" />
                                    </mask>
                                    <rect height="32" width="32" rx="16" x="0" y="0" />
                                    <polygon id="Fill-105" fill="#DBC1A3" points="13.4736842 25.8218623 17.6842105 25.8218623 17.6842105 20.2105263 13.4736842 20.2105263" />
                                    <path id="Fill-107" d="M18.8782908,23.5789474 C20.242082,23.9289016 21.734165,24.1770291 22.7273926,25.3221934 C23.3460907,26.0356673 24.4210526,32 24.4210526,32 L16,32 L16,25.5551898 C17.1853206,25.5551898 17.7692308,24.5005393 17.7692308,23.5789474 L18.8782908,23.5789474 Z" fill="#F4F6F9" />
                                    <path id="Fill-108" d="M12.6487066,23.5789474 C11.2693271,23.9289016 10.2968902,24.1770291 9.29218277,25.3221934 C8.66615937,26.0356673 7.57894737,32 7.57894737,32 L16.097331,32 C18.8394612,29.9936122 20.2105263,28.9502747 20.2105263,28.8699874 C20.2105263,28.220443 18.608692,27.1411515 15.4050233,25.6321129 C14.2060028,25.6321129 13.3877596,24.5005393 13.3877596,23.5789474 L12.6487066,23.5789474 Z" fill="#F4F6F9" />
                                    <path id="Fill-109" d="M15.4615385,6.73684211 C17.7450664,6.73684211 21.3562753,7.92327738 21.3562753,13.4824804 C21.3562753,16.692469 20.2112993,18.7952792 19.712309,19.3770141 C19.2533739,19.9121273 16.6722655,21.0526316 15.4615385,21.0526316 C15.4615385,15.4342018 15.4615385,6.73684211 15.4615385,6.73684211" fill="#EFD4B6" />
                                    <path id="Fill-110" d="M22.3381046,15.3170213 C22.4414958,14.3910579 21.9660513,13.5693194 21.2764531,13.4812952 C20.5864669,13.3936311 19.9436179,14.073343 19.8400326,14.9993064 C19.7366414,15.9250898 20.2120859,16.7466483 20.902266,16.8344924 C21.5916703,16.9221565 22.2347133,16.2426247 22.3381046,15.3170213" fill="#EFD4B6" />
                                    <path id="Fill-111" d="M10.3319838,13.4824804 C10.3319838,16.692469 11.382478,18.7952792 11.8402923,19.3770141 C12.2615301,19.9121273 14.6293023,21.0526316 15.7402952,21.0526316 C20.6242262,15.7484664 15.7402952,6.73684211 15.7402952,6.73684211 C13.6452007,6.73684211 10.3319838,7.92327738 10.3319838,13.4824804 Z" fill="#EFD4B6" />
                                    <path id="Fill-112" d="M8.96958858,15.1631751 C8.86619123,14.2372117 9.34166387,13.4154732 10.0313029,13.3274491 C10.7213299,13.239785 11.364217,13.9194968 11.4676144,14.8454602 C11.5712057,15.7712436 11.0955391,16.5928021 10.4057061,16.6806462 C9.71606705,16.7683103 9.07279195,16.0887785 8.96958858,15.1631751" fill="#EFD4B6" />
                                    <path id="Fill-113" d="M15.6153021,19.2631136 C16.5456263,19.2631136 17.2995951,18.9331856 17.2995951,18.5263158 L13.9311741,18.5263158 C13.9311741,18.9331856 14.6851429,19.2631136 15.6153021,19.2631136" fill="#FFFFFE" />
                                    <path id="Fill-114" d="M21.3550231,13.430193 C21.5838748,12.764512 21.6647211,11.9721178 21.355753,11.1312026 C19.7132764,6.65906244 21.5789474,5.86055949 21.5789474,5.86055949 C21.5789474,5.86055949 19.7625507,5.78289089 18.3534883,6.89835153 C19.3251045,5.45773002 19.7625507,5.08579345 19.7625507,5.08579345 C19.7625507,5.08579345 17.7218648,4.6676048 15.5355459,6.80514921 C16.021354,5.6434365 16.6044332,5.05263158 16.6044332,5.05263158 C16.6044332,5.05263158 12.0370707,5.08579345 10.3849218,8.24577072 C9.44323517,10.0469839 9.3706012,11.9981237 9.59854045,13.4731289 C9.65420216,13.4537554 9.71132385,13.4380471 9.770818,13.430193 C9.98634743,13.4020926 10.1964019,13.4570715 10.3849218,13.5743598 C10.3849218,12.8927961 10.3849218,12.2901227 10.3849218,12.1956987 C11.2596318,11.8237621 12.1828862,11.3591468 12.1341593,9.50033668 C14.1750278,9.50033668 15.2924594,9.50033668 15.2924594,9.50033668 L18.547848,9.50033668 C18.547848,9.50033668 18.4020326,11.591629 20.1514527,12.1026709 C20.1514527,12.9746536 20.1514527,13.7441835 20.1514527,14.3157895 C20.3888818,13.7361549 20.8586301,13.365091 21.3550231,13.430193 Z" fill="#483428" />
                                    <path id="Fill-115" d="M18.5506073,23.5910931 L17.6417276,23.5910931 C17.6417276,24.6426451 16.8144716,25.3417004 15.6034155,25.3444485 C14.3918295,25.3417004 13.4880037,24.6426451 13.4880037,23.5910931 L12.6558704,23.5910931 C12.6558704,24.9863575 13.9755455,26.1174089 15.6034155,26.1174089 C17.2309323,26.1174089 18.5506073,24.9863575 18.5506073,23.5910931 Z" fill="#576574" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

Avatar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Avatar.defaultProps = {
    className: undefined,
    style: undefined,
};
