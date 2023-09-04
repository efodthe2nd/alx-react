import { normalize, schema } from 'normalizr';

const courses = new schema.Entity('courses');

const coursesNormalizr = (data) => {
    return normalize(data, [courses]);
};

export default coursesNormalizr;