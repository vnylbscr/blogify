import React from 'react';

type Size = 'small' | 'big';

interface Props {
   label?: string;
   size?: Size;
}

const Typography = (props: Props) => {
   const { label, size } = props;
   return <div style={{ fontSize: size === 'small' ? 20 : 40 }}>{label}</div>;
};

export default Typography;
