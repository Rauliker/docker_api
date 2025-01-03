import * as admin from 'firebase-admin';
export declare class FirebaseService {
    constructor();
    getFirestore(): admin.firestore.Firestore;
    createFirebaseUser(email: string, active: boolean, password: string): Promise<import("firebase-admin/lib/auth/user-record").UserRecord>;
    updateFirebaseUser(email: string, password: string): Promise<import("firebase-admin/lib/auth/user-record").UserRecord>;
    deleteFirebaseUser(email: string): Promise<void>;
}
