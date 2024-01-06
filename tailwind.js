import { create } from 'tailwind-rn';
import utilities from './tailwind.json';
import clsx from 'clsx';

const tailwind = create({
    ...utilities
})

const tw = (...props) => {
    const className = clsx(...props);
    return tailwind(className);
}

export default tw;