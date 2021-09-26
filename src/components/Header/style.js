import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;

    background-color: #191970;
    position: relative;
`;

export const Logo = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    svg{
        margin-right: 20px;
    }

    strong{
        margin-left: 20px;
    }

`;

export const MenuMobile = styled.div`
    display: none;

    @media (max-width: 760px){
        display: block;

        position: absolute;
        top: 0px;
        bottom: 0px;
        right: 0px;
        left: 0px;

        width: 100%;
        height: 100vh;

        background-color: #191970;

        .sub_header-menu{
            display: flex;
            justify-content: space-between;
            align-items: center;

            border-bottom: 1px solid #DDD;
            padding: 10px;
        }

        .header_icons{
            svg{
                margin-left: 25px;
            }
        }

        .links_mobile{

            border-bottom: 2px solid rgba(000, 000, 000, 0.2);

            ul{
                list-style: none;
                display: block;

                li, a{
                    color: #FFF;
                    text-decoration: none;
                    font-size: 17px;
                    margin-bottom: 19px;
                    margin-left: -10px;
                    font-weight: bold;
                }
            }
        }

        .links_diversos{
            ul{
                list-style: none;
                display: block;

                li, a{
                    color: #FFF;
                    text-decoration: none;
                    font-size: 17px;
                    margin-bottom: 19px;
                    margin-left: -10px;
                    font-weight: bold;
                }
            }
        }
    }
`;