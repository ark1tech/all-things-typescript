// Utility types for union types

type Role = 'admin' | 'user' | 'anonymous';
type RoleAttributes = { role: 'admin'; orgId: number } | { role: 'user'; orgName: string } | { role: 'anonymous' };

// Exclude
type RemoveMembers = Exclude<Role, 'user' | 'anonymous'>;
type RemoveCertainMembers = Exclude<RoleAttributes, { role: 'admin' }>;
