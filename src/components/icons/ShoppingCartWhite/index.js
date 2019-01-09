import React from 'react';
import PropTypes from 'prop-types';

const iconContainerStyles = {
    width: 24,
    height: 24,
    borderRadius: '100%',
    backgroundColor: '#01b6f5',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export default function ShoppingCartWhite(props) {
    const {
        className,
        style,
    } = props;
    return (
        <div style={iconContainerStyles}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13">
                <g fill="none" fillRule="nonzero">
                    <path fill="#FFF" d="M11.93 3.127a.2.2 0 0 0-.198.203v1.627h-.79V3.203A.2.2 0 0 0 10.742 3a.2.2 0 0 0-.197.203v1.754h-.837V3.06a.2.2 0 0 0-.198-.203.2.2 0 0 0-.197.203v1.898h-.845V2.89a.2.2 0 0 0-.198-.203.2.2 0 0 0-.197.203v2.068h-.8l-.09-2.235a.204.204 0 0 0-.206-.195.201.201 0 0 0-.19.211l.09 2.22h-.835L5.74 2.501a.2.2 0 0 0-.22-.177.202.202 0 0 0-.172.228l.297 2.404h-.926l-.549-2.62a.198.198 0 0 0-.235-.155.203.203 0 0 0-.152.242l.532 2.533h-.928L2.3 1.267A.6.6 0 0 0 1.85.845L1.092.69A.197.197 0 0 0 .86.85a.203.203 0 0 0 .155.239l.756.155a.2.2 0 0 1 .15.14l1.886 6.399-1.032 1.97a.62.62 0 0 0 .013.602.586.586 0 0 0 .51.298h8.236a.2.2 0 0 0 .198-.204.2.2 0 0 0-.198-.203H3.298a.194.194 0 0 1-.17-.1.205.205 0 0 1-.004-.2l1.019-1.947 7.436-.573a.606.606 0 0 0 .549-.609V3.33a.2.2 0 0 0-.198-.203zM4.163 7.59l-.656-2.226H4.4l.455 2.172-.692.054zm1.09-.084l-.448-2.142h.89l.258 2.088-.7.054zm1.095-.085l-.254-2.057h.8l.081 2.009-.627.048zm1.726-.133l-.704.054-.08-1.978h.784v1.924zm1.24-.095l-.845.065V5.364h.845v1.829zm1.232-.096l-.837.065V5.364h.837v1.733zm1.186-.28c0 .106-.08.195-.183.203l-.608.047V5.364h.791v1.453z" />
                    <g fill="#0C84AE" transform="translate(3.208 10.851)">
                        <ellipse cx=".614" cy=".615" rx="1" ry="1" />
                        <ellipse cx="7.733" cy=".615" rx="1" ry="1" />
                    </g>
                    <g fill="#A4A7B5">
                        <path d="M3.822 11.67a.243.243 0 0 1-.237-.2l-.158-.818h.79l-.158.818a.243.243 0 0 1-.237.2zM10.941 11.67a.243.243 0 0 1-.236-.2l-.16-.818h.792l-.16.818a.243.243 0 0 1-.236.2z" />
                    </g>
                    <path fill="#FFF" d="M12.152 3.128L2.49 1.911l.126.426 9.488 1.195a.2.2 0 0 0 .22-.177.202.202 0 0 0-.172-.227z" />
                </g>
            </svg>
        </div>
    );
}

ShoppingCartWhite.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
ShoppingCartWhite.defaultProps = {
    className: undefined,
    style: undefined,
};
