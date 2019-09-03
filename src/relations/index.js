import { Relation } from 'tinper-mox';

const relation = new Relation({
    filters: {
        filter1(payload) {
            return payload;
        },
        filter2(payload) {
            return payload;
        },
    },
});

relation.listen(/^count/, ({
    action
}) => {
    console.log('[relation] count action name: ', action);
});

relation.autorun((context) => {
    console.log('[autorun] ', context.count.toJS());
});

export default relation;
