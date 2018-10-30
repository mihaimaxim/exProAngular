import { Subject } from 'rxjs';
import { Access } from './access.model';

export class AccessService {

    updatedAccesses = new Subject<Access[]>();

    private acceses: Access[] = [
        new Access(
            'one',
            ''
        ),
        new Access(
            'two',
            ''
        )
    ];
}
