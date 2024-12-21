import { FC } from 'react';

type Props = {};

const Contact: FC<Props> = ({ }) => {
    return (
        <>
            <div className='bg-blue-400'>
                <div>
                <h1 className='mx-12 py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a orci et nisl porta bibendum. Quisque ornare mi in orci auctor laoreet. 
                    Vestibulum luctus iaculis mi, in elementum justo euismod dignissim. Nulla vulputate sed sem id elementum. In ut lorem elit. Morbi aliquet, urna vitae venenatis 
                    rutrum, mauris ante posuere turpis, in consequat massa libero nec nunc. Proin non pretium neque. Donec congue libero at lacus scelerisque euismod. 
                    Pellentesque tempor diam mi, quis fringilla quam luctus et. Praesent imperdiet tortor dolor, at placerat diam facilisis vehicula.
                </h1>
                </div>
            </div>
        </>
    );
}

export default Contact;