import courseReducer from "./coursereducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { fromJS, toJS, Map } from 'immutable';
import coursesNormalizr from "../schema/courses";

describe('courseReducer', function(){

    it("Tests that the default state returns an empty array", function(){
        const state = courseReducer(undefined, {});
        expect(state).toEqual(Map([]));
    });

    it("FETCH_COURSE_SUCCESS", function(){
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                {
                    id: 1,
                    name: 'ES6',
                    credit: 60,
                },
                {
                    id: 2,
                    name: 'Webpack',
                    credit: 40,
                },
                {
                    id: 3,
                    name: 'React',
                    credit: 20,
                },
            ]
        };
    const expectedData =
    [
        {
            id: 1,
            name: 'ES6',
            isSelected: false,
            credit: 60,
        },
        {
            id: 2,
            name: 'Webpack',
            isSelected: false,
            credit: 40,
        },
        {
            id: 3,
            name: 'React',
            isSelected: false,
            credit: 20,
        },
    ];
    const state = courseReducer(undefined, action);
    
    expect(state.toJS()).toEqual(coursesNormalizr(expectedData));
    });

    it('SELECT_COURSE', function(){
        const initialData = [
            {
                id: 1,
                name: 'ES6',
                isSelected: false,
                credit: 60,
            },
            {
                id: 2,
                name: 'Webpack',
                isSelected: false,
                credit: 40,
            },
            {
                id: 3,
                name: 'React',
                isSelected: false,
                credit: 20,
            },
        ];
        const action = {
            type: SELECT_COURSE,
            index: 2,
        };
        const expectedData = [
            {
                id: 1,
                name: 'ES6',
                isSelected: false,
                credit: 60,
            },
            {
                id: 2,
                name: 'Webpack',
                isSelected: true,
                credit: 40,
            },
            {
                id: 3,
                name: 'React',
                isSelected: false,
                credit: 20,
            },
        ];

        const state = courseReducer(fromJS(coursesNormalizr(initialData)), action);
        
        expect(state.toJS()).toEqual(coursesNormalizr(expectedData));
    });

    it('UNSELECT_COURSE', function(){
        const initialData = [
            {
                id: 1,
                name: 'ES6',
                isSelected: false,
                credit: 60,
            },
            {
                id: 2,
                name: 'Webpack',
                isSelected: true,
                credit: 40,
            },
            {
                id: 3,
                name: 'React',
                isSelected: false,
                credit: 20,
            },
        ];
        const action = {
            type: UNSELECT_COURSE,
            index: 2,
        };
        const expectedData = [
            {
                id: 1,
                name: 'ES6',
                isSelected: false,
                credit: 60,
            },
            {
                id: 2,
                name: 'Webpack',
                isSelected: false,
                credit: 40,
            },
            {
                id: 3,
                name: 'React',
                isSelected: false,
                credit: 20,
            },
        ];

        const state = courseReducer(fromJS(coursesNormalizr(initialData)), action);
        
        expect(state.toJS()).toEqual(coursesNormalizr(expectedData));
    });

    
});